classDeclarationCheckUsedBeforeDefinitionInItself.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 51,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 51,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 9,
        "end": 51,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 16,
            "end": 42,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 23,
              "end": 30,
              "decorators": [],
              "name": "intance",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": true,
            "value": {
              "type": "NewExpression",
              "start": 33,
              "end": 41,
              "arguments": [],
              "callee": {
                "type": "Identifier",
                "start": 37,
                "end": 39,
                "decorators": [],
                "name": "C3",
                "optional": false
              }
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 8,
        "decorators": [],
        "name": "C3",
        "optional": false
      },
      "implements": [],
      "superClass": null
    }
  ],
  "sourceType": "script"
}
```
