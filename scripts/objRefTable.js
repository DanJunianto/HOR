const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.Sprite,
		C3.Behaviors.custom,
		C3.Plugins.Camera3D,
		C3.Plugins.Mouse,
		C3.Plugins.Keyboard,
		C3.Plugins.Shape3D,
		C3.Behaviors.Bullet,
		C3.Behaviors.MoveTo,
		C3.Behaviors.solid,
		C3.Plugins.Text,
		C3.Plugins.Audio,
		C3.Plugins.Touch,
		C3.Plugins.TiledBg,
		C3.Plugins.System.Cnds.OnLayoutStart,
		C3.Plugins.Camera3D.Acts.LookParallelToLayout,
		C3.Plugins.Sprite.Exps.X,
		C3.Plugins.Sprite.Exps.Y,
		C3.Plugins.Sprite.Exps.ZElevation,
		C3.Plugins.Sprite.Exps.Angle,
		C3.Plugins.Shape3D.Acts.SetVisible,
		C3.Plugins.Audio.Acts.PlayByName,
		C3.Plugins.System.Cnds.EveryTick,
		C3.Plugins.Camera3D.Acts.SetPosition,
		C3.Plugins.Shape3D.Acts.SetPos,
		C3.Plugins.Shape3D.Exps.X,
		C3.Plugins.Shape3D.Exps.Angle,
		C3.Plugins.Shape3D.Exps.Y,
		C3.Plugins.Shape3D.Acts.SetZElevation,
		C3.Plugins.Shape3D.Exps.ZElevation,
		C3.Plugins.Shape3D.Cnds.OnCreated,
		C3.Plugins.System.Acts.Wait,
		C3.Plugins.Shape3D.Acts.Destroy,
		C3.Behaviors.MoveTo.Acts.MoveToObject,
		C3.Plugins.Shape3D.Cnds.OnCollision,
		C3.Plugins.Shape3D.Acts.SubInstanceVar,
		C3.Plugins.Shape3D.Cnds.CompareInstanceVar,
		C3.Plugins.Sprite.Cnds.OnCollision,
		C3.Plugins.System.Acts.AddVar,
		C3.Plugins.Text.Acts.SetText,
		C3.Plugins.System.Acts.SubVar,
		C3.Plugins.System.Cnds.CompareVar,
		C3.Plugins.Sprite.Acts.Spawn,
		C3.Plugins.Audio.Acts.StopAll,
		C3.Plugins.Sprite.Acts.SetAnimFrame,
		C3.Plugins.Sprite.Acts.SetVisible,
		C3.Plugins.Touch.Cnds.IsTouchingObject,
		C3.Plugins.Sprite.Acts.MoveAtAngle,
		C3.Plugins.Camera3D.Exps.CameraXRotation,
		C3.Plugins.System.Exps.dt,
		C3.Behaviors.custom.Acts.PushOutSolidAngle,
		C3.Plugins.Touch.Cnds.OnTapGesture,
		C3.Plugins.Audio.Acts.Play,
		C3.Plugins.Shape3D.Acts.SetAngle,
		C3.Plugins.Shape3D.Acts.SetInstanceVar,
		C3.Plugins.Camera3D.Exps.CameraYRotation,
		C3.Behaviors.Bullet.Exps.Speed,
		C3.Plugins.Keyboard.Cnds.IsKeyDown,
		C3.Plugins.Mouse.Cnds.OnClick,
		C3.Plugins.System.Acts.RestartLayout,
		C3.Plugins.System.Acts.ResetGlobals,
		C3.Plugins.Mouse.Cnds.OnMovement,
		C3.Plugins.Camera3D.Acts.RotateCamera,
		C3.Plugins.Mouse.Exps.MovementX,
		C3.Plugins.Mouse.Exps.MovementY,
		C3.Plugins.Mouse.Acts.RequestPointerLock,
		C3.Plugins.Sprite.Acts.Destroy
	];
};
self.C3_JsPropNameTable = [
	{b: 0},
	{Custom: 0},
	{player: 0},
	{"3DCamera": 0},
	{Mouse: 0},
	{Keyboard: 0},
	{zAxis: 0},
	{speeds: 0},
	{Bullet: 0},
	{bullets: 0},
	{health: 0},
	{MoveTo: 0},
	{enemy: 0},
	{Solid: 0},
	{BLOK: 0},
	{"3DShape2": 0},
	{"3DShape3": 0},
	{HandGun: 0},
	{Sprite: 0},
	{enemi: 0},
	{Sprite3: 0},
	{Text: 0},
	{"3DShape11": 0},
	{Audio: 0},
	{Sprite9: 0},
	{"3DShape16": 0},
	{"3DShape17": 0},
	{Touch: 0},
	{"3DShape18": 0},
	{kanan: 0},
	{atas: 0},
	{bawah: 0},
	{kiri: 0},
	{dorr: 0},
	{Sprite12: 0},
	{Sprite13: 0},
	{Sprite2: 0},
	{TiledBackground: 0},
	{Sprite4: 0},
	{Sprite14: 0},
	{Sprite7: 0},
	{playerHigh: 0},
	{playerSpeed: 0},
	{mouseSpeed: 0},
	{enemi2: 0}
];

self.InstanceType = {
	player: class extends self.ISpriteInstance {},
	_3DCamera: class extends self.IInstance {},
	Mouse: class extends self.IInstance {},
	Keyboard: class extends self.IInstance {},
	bullets: class extends self.I3DShapeInstance {},
	enemy: class extends self.I3DShapeInstance {},
	BLOK: class extends self.I3DShapeInstance {},
	_3DShape2: class extends self.I3DShapeInstance {},
	_3DShape3: class extends self.I3DShapeInstance {},
	HandGun: class extends self.ISpriteInstance {},
	Sprite: class extends self.ISpriteInstance {},
	enemi: class extends self.ITextInstance {},
	Sprite3: class extends self.ISpriteInstance {},
	Text: class extends self.ITextInstance {},
	_3DShape11: class extends self.I3DShapeInstance {},
	Audio: class extends self.IInstance {},
	Sprite9: class extends self.ISpriteInstance {},
	_3DShape16: class extends self.I3DShapeInstance {},
	_3DShape17: class extends self.I3DShapeInstance {},
	Touch: class extends self.IInstance {},
	_3DShape18: class extends self.I3DShapeInstance {},
	kanan: class extends self.ISpriteInstance {},
	atas: class extends self.ISpriteInstance {},
	bawah: class extends self.ISpriteInstance {},
	kiri: class extends self.ISpriteInstance {},
	dorr: class extends self.ISpriteInstance {},
	Sprite12: class extends self.ISpriteInstance {},
	Sprite13: class extends self.ISpriteInstance {},
	Sprite2: class extends self.ISpriteInstance {},
	TiledBackground: class extends self.ITiledBackgroundInstance {},
	Sprite4: class extends self.ISpriteInstance {},
	Sprite14: class extends self.ISpriteInstance {},
	Sprite7: class extends self.ISpriteInstance {}
}