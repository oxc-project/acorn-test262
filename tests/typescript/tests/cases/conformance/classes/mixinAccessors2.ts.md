__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "mixin",
        "optional": false,
        "typeAnnotation": null,
        "start": 9,
        "end": 14
      },
      "generator": false,
      "async": false,
      "declare": false,
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
              "start": 15,
              "end": 16
            },
            "constraint": {
              "type": "TSTypeLiteral",
              "members": [
                {
                  "type": "TSConstructSignatureDeclaration",
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "RestElement",
                      "decorators": [],
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "args",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 35,
                        "end": 39
                      },
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSArrayType",
                          "elementType": {
                            "type": "TSAnyKeyword",
                            "start": 41,
                            "end": 44
                          },
                          "start": 41,
                          "end": 46
                        },
                        "start": 39,
                        "end": 46
                      },
                      "value": null,
                      "start": 32,
                      "end": 46
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeLiteral",
                      "members": [],
                      "start": 49,
                      "end": 51
                    },
                    "start": 47,
                    "end": 51
                  },
                  "start": 27,
                  "end": 51
                }
              ],
              "start": 25,
              "end": 53
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 15,
            "end": 53
          }
        ],
        "start": 14,
        "end": 54
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "superclass",
          "optional": false,
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
                "start": 67,
                "end": 68
              },
              "typeArguments": null,
              "start": 67,
              "end": 68
            },
            "start": 65,
            "end": 68
          },
          "start": 55,
          "end": 68
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "ClassExpression",
              "decorators": [],
              "id": null,
              "typeParameters": null,
              "superClass": {
                "type": "Identifier",
                "decorators": [],
                "name": "superclass",
                "optional": false,
                "typeAnnotation": null,
                "start": 95,
                "end": 105
              },
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "body": [
                  {
                    "type": "AccessorProperty",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "name",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 121,
                      "end": 125
                    },
                    "typeAnnotation": null,
                    "value": {
                      "type": "Literal",
                      "value": "",
                      "raw": "\"\"",
                      "start": 128,
                      "end": 130
                    },
                    "computed": false,
                    "static": false,
                    "override": false,
                    "definite": false,
                    "accessibility": null,
                    "declare": false,
                    "optional": false,
                    "readonly": false,
                    "start": 112,
                    "end": 131
                  }
                ],
                "start": 106,
                "end": 135
              },
              "abstract": false,
              "declare": false,
              "start": 81,
              "end": 135
            },
            "start": 74,
            "end": 136
          }
        ],
        "start": 70,
        "end": 138
      },
      "expression": false,
      "start": 0,
      "end": 138
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "BaseClass",
        "optional": false,
        "typeAnnotation": null,
        "start": 146,
        "end": 155
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "AccessorProperty",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "name",
              "optional": false,
              "typeAnnotation": null,
              "start": 169,
              "end": 173
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "value": "",
              "raw": "\"\"",
              "start": 176,
              "end": 178
            },
            "computed": false,
            "static": false,
            "override": false,
            "definite": false,
            "accessibility": null,
            "declare": false,
            "optional": false,
            "readonly": false,
            "start": 160,
            "end": 179
          }
        ],
        "start": 156,
        "end": 181
      },
      "abstract": false,
      "declare": false,
      "start": 140,
      "end": 181
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "MyClass",
        "optional": false,
        "typeAnnotation": null,
        "start": 189,
        "end": 196
      },
      "typeParameters": null,
      "superClass": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "mixin",
          "optional": false,
          "typeAnnotation": null,
          "start": 205,
          "end": 210
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "BaseClass",
            "optional": false,
            "typeAnnotation": null,
            "start": 211,
            "end": 220
          }
        ],
        "optional": false,
        "start": 205,
        "end": 221
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "AccessorProperty",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "name",
              "optional": false,
              "typeAnnotation": null,
              "start": 235,
              "end": 239
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "value": "",
              "raw": "\"\"",
              "start": 242,
              "end": 244
            },
            "computed": false,
            "static": false,
            "override": false,
            "definite": false,
            "accessibility": null,
            "declare": false,
            "optional": false,
            "readonly": false,
            "start": 226,
            "end": 245
          }
        ],
        "start": 222,
        "end": 247
      },
      "abstract": false,
      "declare": false,
      "start": 183,
      "end": 247
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 247
}
```
