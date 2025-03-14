privateNameBadSuperUseDefineForClassFields.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 85,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 10,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 10,
        "body": []
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 7,
        "decorators": [],
        "name": "B",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "EmptyStatement",
      "start": 10,
      "end": 11
    },
    {
      "type": "ClassDeclaration",
      "start": 12,
      "end": 84,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 30,
        "end": 84,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 34,
            "end": 37,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "PrivateIdentifier",
              "start": 34,
              "end": 36,
              "name": "x"
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "value": null
          },
          {
            "type": "MethodDefinition",
            "start": 40,
            "end": 82,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 40,
              "end": 51,
              "decorators": [],
              "name": "constructor",
              "optional": false
            },
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 51,
              "end": 82,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 54,
                "end": 82,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 60,
                    "end": 65,
                    "expression": {
                      "type": "ThisExpression",
                      "start": 60,
                      "end": 64
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 70,
                    "end": 78,
                    "expression": {
                      "type": "CallExpression",
                      "start": 70,
                      "end": 77,
                      "arguments": [],
                      "callee": {
                        "type": "Super",
                        "start": 70,
                        "end": 75
                      },
                      "optional": false
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": []
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 18,
        "end": 19,
        "decorators": [],
        "name": "A",
        "optional": false
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 28,
        "end": 29,
        "decorators": [],
        "name": "B",
        "optional": false
      }
    }
  ],
  "sourceType": "script"
}
```
