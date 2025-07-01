__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Kind",
        "optional": false,
        "typeAnnotation": null,
        "start": 27,
        "end": 31
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": "one",
              "raw": "\"one\"",
              "start": 34,
              "end": 39
            },
            "start": 34,
            "end": 39
          },
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": "two",
              "raw": "\"two\"",
              "start": 42,
              "end": 47
            },
            "start": 42,
            "end": 47
          },
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": "three",
              "raw": "\"three\"",
              "start": 50,
              "end": 57
            },
            "start": 50,
            "end": 57
          }
        ],
        "start": 34,
        "end": 57
      },
      "declare": false,
      "start": 22,
      "end": 58
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "getInterfaceFromString",
        "optional": false,
        "typeAnnotation": null,
        "start": 77,
        "end": 99
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 100,
              "end": 101
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Kind",
                "optional": false,
                "typeAnnotation": null,
                "start": 110,
                "end": 114
              },
              "typeArguments": null,
              "start": 110,
              "end": 114
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 100,
            "end": 114
          }
        ],
        "start": 99,
        "end": 115
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "options",
          "optional": true,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSIntersectionType",
              "types": [
                {
                  "type": "TSTypeLiteral",
                  "members": [
                    {
                      "type": "TSPropertySignature",
                      "computed": false,
                      "optional": true,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "type",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 128,
                        "end": 132
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 135,
                            "end": 136
                          },
                          "typeArguments": null,
                          "start": 135,
                          "end": 136
                        },
                        "start": 133,
                        "end": 136
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 128,
                      "end": 136
                    }
                  ],
                  "start": 126,
                  "end": 138
                },
                {
                  "type": "TSTypeLiteral",
                  "members": [
                    {
                      "type": "TSPropertySignature",
                      "computed": false,
                      "optional": true,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "type",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 143,
                        "end": 147
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Kind",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 150,
                            "end": 154
                          },
                          "typeArguments": null,
                          "start": 150,
                          "end": 154
                        },
                        "start": 148,
                        "end": 154
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 143,
                      "end": 154
                    }
                  ],
                  "start": 141,
                  "end": 156
                }
              ],
              "start": 126,
              "end": 156
            },
            "start": 124,
            "end": 156
          },
          "start": 116,
          "end": 156
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 159,
            "end": 160
          },
          "typeArguments": null,
          "start": 159,
          "end": 160
        },
        "start": 157,
        "end": 160
      },
      "body": null,
      "expression": false,
      "start": 60,
      "end": 161
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "result",
            "optional": false,
            "typeAnnotation": null,
            "start": 169,
            "end": 175
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "getInterfaceFromString",
              "optional": false,
              "typeAnnotation": null,
              "start": 178,
              "end": 200
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ObjectExpression",
                "properties": [
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "type",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 203,
                      "end": 207
                    },
                    "value": {
                      "type": "Literal",
                      "value": "two",
                      "raw": "'two'",
                      "start": 209,
                      "end": 214
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 203,
                    "end": 214
                  }
                ],
                "start": 201,
                "end": 216
              }
            ],
            "optional": false,
            "start": 178,
            "end": 217
          },
          "definite": false,
          "start": 169,
          "end": 217
        }
      ],
      "declare": false,
      "start": 163,
      "end": 218
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 22,
  "end": 218
}
```
