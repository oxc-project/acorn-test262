__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "ab",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
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
                          "name": "n",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 20,
                          "end": 21
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 23,
                            "end": 29
                          },
                          "start": 21,
                          "end": 29
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 20,
                        "end": 29
                      }
                    ],
                    "start": 18,
                    "end": 31
                  },
                  {
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
                          "name": "n",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 36,
                          "end": 37
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 39,
                            "end": 45
                          },
                          "start": 37,
                          "end": 45
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 36,
                        "end": 45
                      }
                    ],
                    "start": 34,
                    "end": 47
                  }
                ],
                "start": 18,
                "end": 47
              },
              "start": 16,
              "end": 47
            },
            "start": 14,
            "end": 47
          },
          "init": null,
          "definite": false,
          "start": 14,
          "end": 47
        }
      ],
      "declare": true,
      "start": 0,
      "end": 48
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
            "name": "nameN",
            "optional": false,
            "typeAnnotation": null,
            "start": 55,
            "end": 60
          },
          "init": {
            "type": "Literal",
            "value": "n",
            "raw": "\"n\"",
            "start": 63,
            "end": 66
          },
          "definite": false,
          "start": 55,
          "end": 66
        }
      ],
      "declare": false,
      "start": 49,
      "end": 67
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "ObjectPattern",
            "decorators": [],
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nameN",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 77,
                  "end": 82
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "n",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 85,
                  "end": 86
                },
                "method": false,
                "shorthand": false,
                "computed": true,
                "optional": false,
                "start": 76,
                "end": 86
              }
            ],
            "optional": false,
            "typeAnnotation": null,
            "start": 74,
            "end": 88
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "ab",
            "optional": false,
            "typeAnnotation": null,
            "start": 91,
            "end": 93
          },
          "definite": false,
          "start": 74,
          "end": 93
        }
      ],
      "declare": false,
      "start": 68,
      "end": 94
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null,
        "start": 102,
        "end": 103
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "p",
              "optional": false,
              "typeAnnotation": null,
              "start": 114,
              "end": 115
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 117,
                "end": 123
              },
              "start": 115,
              "end": 123
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "private",
            "start": 106,
            "end": 124
          }
        ],
        "start": 104,
        "end": 126
      },
      "abstract": false,
      "declare": false,
      "start": 96,
      "end": 126
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
            "name": "nameP",
            "optional": false,
            "typeAnnotation": null,
            "start": 133,
            "end": 138
          },
          "init": {
            "type": "Literal",
            "value": "p",
            "raw": "\"p\"",
            "start": 141,
            "end": 144
          },
          "definite": false,
          "start": 133,
          "end": 144
        }
      ],
      "declare": false,
      "start": 127,
      "end": 145
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "ObjectPattern",
            "decorators": [],
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Literal",
                  "value": "p",
                  "raw": "\"p\"",
                  "start": 154,
                  "end": 157
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "p0",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 159,
                  "end": 161
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 154,
                "end": 161
              }
            ],
            "optional": false,
            "typeAnnotation": null,
            "start": 152,
            "end": 163
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null,
              "start": 170,
              "end": 171
            },
            "typeArguments": null,
            "arguments": [],
            "start": 166,
            "end": 173
          },
          "definite": false,
          "start": 152,
          "end": 173
        }
      ],
      "declare": false,
      "start": 146,
      "end": 174
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "ObjectPattern",
            "decorators": [],
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Literal",
                  "value": "p",
                  "raw": "\"p\"",
                  "start": 184,
                  "end": 187
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "p1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 190,
                  "end": 192
                },
                "method": false,
                "shorthand": false,
                "computed": true,
                "optional": false,
                "start": 183,
                "end": 192
              }
            ],
            "optional": false,
            "typeAnnotation": null,
            "start": 181,
            "end": 194
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null,
              "start": 201,
              "end": 202
            },
            "typeArguments": null,
            "arguments": [],
            "start": 197,
            "end": 204
          },
          "definite": false,
          "start": 181,
          "end": 204
        }
      ],
      "declare": false,
      "start": 175,
      "end": 205
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "ObjectPattern",
            "decorators": [],
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nameP",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 215,
                  "end": 220
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "p2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 223,
                  "end": 225
                },
                "method": false,
                "shorthand": false,
                "computed": true,
                "optional": false,
                "start": 214,
                "end": 225
              }
            ],
            "optional": false,
            "typeAnnotation": null,
            "start": 212,
            "end": 227
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null,
              "start": 234,
              "end": 235
            },
            "typeArguments": null,
            "arguments": [],
            "start": 230,
            "end": 237
          },
          "definite": false,
          "start": 212,
          "end": 237
        }
      ],
      "declare": false,
      "start": 206,
      "end": 238
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "ObjectPattern",
            "decorators": [],
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "p",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 247,
                  "end": 248
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "p3",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 250,
                  "end": 252
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 247,
                "end": 252
              }
            ],
            "optional": false,
            "typeAnnotation": null,
            "start": 245,
            "end": 254
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null,
              "start": 261,
              "end": 262
            },
            "typeArguments": null,
            "arguments": [],
            "start": 257,
            "end": 264
          },
          "definite": false,
          "start": 245,
          "end": 264
        }
      ],
      "declare": false,
      "start": 239,
      "end": 265
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 265
}
```
