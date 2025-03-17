__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 137,
  "body": [
    {
      "type": "TSDeclareFunction",
      "start": 0,
      "end": 37,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 12,
        "name": "foo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 13,
          "end": 28,
          "name": "bar",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 16,
            "end": 28,
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "start": 17,
              "end": 28,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 18,
                  "end": 27,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 18,
                    "end": 19,
                    "name": "a",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 19,
                    "end": 26,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 20,
                      "end": 26
                    }
                  },
                  "accessibility": null,
                  "static": false
                }
              ]
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": false,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 29,
        "end": 36,
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "start": 30,
          "end": 36
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 38,
      "end": 76,
      "id": {
        "type": "Identifier",
        "start": 47,
        "end": 50,
        "name": "foo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 51,
          "end": 67,
          "name": "bar",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 54,
            "end": 67,
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "start": 55,
              "end": 67,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 56,
                  "end": 66,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 56,
                    "end": 57,
                    "name": "a",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 57,
                    "end": 65,
                    "typeAnnotation": {
                      "type": "TSBooleanKeyword",
                      "start": 58,
                      "end": 65
                    }
                  },
                  "accessibility": null,
                  "static": false
                }
              ]
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": false,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 68,
        "end": 75,
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 69,
          "end": 75
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 77,
      "end": 121,
      "id": {
        "type": "Identifier",
        "start": 86,
        "end": 89,
        "name": "foo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 90,
          "end": 102,
          "name": "bar",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 93,
            "end": 102,
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "start": 94,
              "end": 102,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 95,
                  "end": 101,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 95,
                    "end": 96,
                    "name": "a",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 96,
                    "end": 100,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 97,
                      "end": 100
                    }
                  },
                  "accessibility": null,
                  "static": false
                }
              ]
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 107,
        "end": 121,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 109,
            "end": 119,
            "argument": {
              "type": "Identifier",
              "start": 116,
              "end": 119,
              "name": "bar",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 103,
        "end": 107,
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 104,
          "end": 107
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 122,
      "end": 136,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 126,
          "end": 135,
          "id": {
            "type": "Identifier",
            "start": 126,
            "end": 127,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 130,
            "end": 135,
            "callee": {
              "type": "Identifier",
              "start": 130,
              "end": 133,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
