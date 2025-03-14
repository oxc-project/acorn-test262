__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 145,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 42,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 11,
        "end": 42,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 18,
            "end": 40,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 18,
              "end": 29,
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
              "start": 29,
              "end": 40,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 38,
                "end": 40,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 30,
                  "end": 36,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 31,
                    "end": 36,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 33,
                      "end": 36
                    }
                  }
                }
              ]
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 10,
        "decorators": [],
        "name": "Base",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "ClassDeclaration",
      "start": 44,
      "end": 144,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 67,
        "end": 144,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 73,
            "end": 94,
            "accessibility": "public",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 80,
              "end": 81,
              "decorators": [],
              "name": "x",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 81,
              "end": 89,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 83,
                "end": 89
              }
            },
            "value": {
              "type": "Literal",
              "start": 92,
              "end": 93,
              "raw": "0",
              "value": 0
            }
          },
          {
            "type": "MethodDefinition",
            "start": 100,
            "end": 142,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 100,
              "end": 111,
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
              "start": 111,
              "end": 142,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 114,
                "end": 142,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 124,
                    "end": 136,
                    "expression": {
                      "type": "CallExpression",
                      "start": 124,
                      "end": 135,
                      "arguments": [
                        {
                          "type": "ThisExpression",
                          "start": 130,
                          "end": 134
                        }
                      ],
                      "callee": {
                        "type": "Super",
                        "start": 124,
                        "end": 129
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
        "start": 50,
        "end": 53,
        "decorators": [],
        "name": "Foo",
        "optional": false
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 62,
        "end": 66,
        "decorators": [],
        "name": "Base",
        "optional": false
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
