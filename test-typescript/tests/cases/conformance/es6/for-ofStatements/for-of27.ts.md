for-of27.ts
```json
{
  "type": "Program",
  "start": 16,
  "end": 111,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 16,
      "end": 70,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 39,
        "end": 70,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 45,
            "end": 68,
            "computed": true,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "MemberExpression",
              "start": 46,
              "end": 61,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 46,
                "end": 52,
                "decorators": [],
                "name": "Symbol",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 53,
                "end": 61,
                "decorators": [],
                "name": "iterator",
                "optional": false
              }
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 62,
              "end": 67,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 64,
                "end": 67
              }
            },
            "value": null
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 22,
        "end": 38,
        "decorators": [],
        "name": "MyStringIterator",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "ForOfStatement",
      "start": 72,
      "end": 111,
      "await": false,
      "body": {
        "type": "BlockStatement",
        "start": 108,
        "end": 111,
        "body": []
      },
      "left": {
        "type": "VariableDeclaration",
        "start": 77,
        "end": 82,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 81,
            "end": 82,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 81,
              "end": 82,
              "decorators": [],
              "name": "v",
              "optional": false
            },
            "init": null
          }
        ],
        "declare": false,
        "kind": "var"
      },
      "right": {
        "type": "NewExpression",
        "start": 86,
        "end": 106,
        "arguments": [],
        "callee": {
          "type": "Identifier",
          "start": 90,
          "end": 106,
          "decorators": [],
          "name": "MyStringIterator",
          "optional": false
        }
      }
    }
  ],
  "sourceType": "script"
}
```
