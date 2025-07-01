__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 9,
        "end": 12
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "bar",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 18,
                      "end": 19
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 20,
                        "end": 26
                      },
                      "start": 19,
                      "end": 26
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 18,
                    "end": 27
                  }
                ],
                "start": 17,
                "end": 28
              },
              "start": 17,
              "end": 30
            },
            "start": 16,
            "end": 30
          },
          "start": 13,
          "end": 30
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "start": 32,
          "end": 38
        },
        "start": 31,
        "end": 38
      },
      "body": null,
      "expression": false,
      "start": 0,
      "end": 39
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 49,
        "end": 52
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "bar",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 58,
                      "end": 59
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 60,
                        "end": 67
                      },
                      "start": 59,
                      "end": 67
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 58,
                    "end": 68
                  }
                ],
                "start": 57,
                "end": 69
              },
              "start": 57,
              "end": 71
            },
            "start": 56,
            "end": 71
          },
          "start": 53,
          "end": 71
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 73,
          "end": 79
        },
        "start": 72,
        "end": 79
      },
      "body": null,
      "expression": false,
      "start": 40,
      "end": 80
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 90,
        "end": 93
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "bar",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 99,
                      "end": 100
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 101,
                        "end": 104
                      },
                      "start": 100,
                      "end": 104
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 99,
                    "end": 105
                  }
                ],
                "start": 98,
                "end": 106
              },
              "start": 98,
              "end": 108
            },
            "start": 97,
            "end": 108
          },
          "start": 94,
          "end": 108
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 110,
          "end": 113
        },
        "start": 109,
        "end": 113
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null,
              "start": 122,
              "end": 125
            },
            "start": 115,
            "end": 125
          }
        ],
        "start": 113,
        "end": 127
      },
      "expression": false,
      "start": 81,
      "end": 127
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 132,
            "end": 133
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 136,
              "end": 139
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 136,
            "end": 141
          },
          "definite": false,
          "start": 132,
          "end": 141
        }
      ],
      "declare": false,
      "start": 128,
      "end": 142
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 142
}
```
