superSymbolIndexedAccess5.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 154,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 16,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 15,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 15,
            "decorators": [],
            "name": "symbol",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 10,
              "end": 15,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 12,
                "end": 15
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ClassDeclaration",
      "start": 18,
      "end": 72,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 28,
        "end": 72,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 34,
            "end": 70,
            "computed": true,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 35,
              "end": 41,
              "decorators": [],
              "name": "symbol",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 42,
              "end": 70,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 45,
                "end": 70,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 55,
                    "end": 64,
                    "argument": {
                      "type": "Literal",
                      "start": 62,
                      "end": 63,
                      "raw": "0",
                      "value": 0
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
        "start": 24,
        "end": 27,
        "decorators": [],
        "name": "Foo",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "ClassDeclaration",
      "start": 74,
      "end": 154,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 96,
        "end": 154,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 102,
            "end": 152,
            "computed": true,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 103,
              "end": 109,
              "decorators": [],
              "name": "symbol",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 110,
              "end": 152,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 113,
                "end": 152,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 123,
                    "end": 146,
                    "argument": {
                      "type": "CallExpression",
                      "start": 130,
                      "end": 145,
                      "arguments": [],
                      "callee": {
                        "type": "MemberExpression",
                        "start": 130,
                        "end": 143,
                        "computed": true,
                        "object": {
                          "type": "Super",
                          "start": 130,
                          "end": 135
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 136,
                          "end": 142,
                          "decorators": [],
                          "name": "symbol",
                          "optional": false
                        }
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
        "start": 80,
        "end": 83,
        "decorators": [],
        "name": "Bar",
        "optional": false
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 92,
        "end": 95,
        "decorators": [],
        "name": "Foo",
        "optional": false
      }
    }
  ],
  "sourceType": "script"
}
```
