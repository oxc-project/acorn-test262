recursiveBaseConstructorCreation1.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 96,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 44,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 9,
        "end": 44,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 11,
            "end": 42,
            "accessibility": "public",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 18,
              "end": 22,
              "decorators": [],
              "name": "func",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 22,
              "end": 42,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 39,
                "end": 42,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 23,
                  "end": 32,
                  "decorators": [],
                  "name": "param",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 28,
                    "end": 32,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 30,
                      "end": 32,
                      "typeName": {
                        "type": "Identifier",
                        "start": 30,
                        "end": 32,
                        "decorators": [],
                        "name": "C2",
                        "optional": false
                      }
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 33,
                "end": 38,
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "start": 35,
                  "end": 38
                }
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
        "name": "C1",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "ClassDeclaration",
      "start": 45,
      "end": 68,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 65,
        "end": 68,
        "body": []
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 51,
        "end": 53,
        "decorators": [],
        "name": "C2",
        "optional": false
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 62,
        "end": 64,
        "decorators": [],
        "name": "C1",
        "optional": false
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 69,
      "end": 86,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 73,
          "end": 85,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 73,
            "end": 74,
            "decorators": [],
            "name": "x",
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 77,
            "end": 85,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 81,
              "end": 83,
              "decorators": [],
              "name": "C2",
              "optional": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    }
  ],
  "sourceType": "script"
}
```
