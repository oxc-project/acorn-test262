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
        "name": "f",
        "optional": false,
        "typeAnnotation": null,
        "start": 154,
        "end": 155
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
              "start": 156,
              "end": 157
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 156,
            "end": 157
          }
        ],
        "start": 155,
        "end": 158
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
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
                "start": 162,
                "end": 163
              },
              "typeArguments": null,
              "start": 162,
              "end": 163
            },
            "start": 160,
            "end": 163
          },
          "start": 159,
          "end": 163
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
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
                            "name": "s",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 180,
                            "end": 181
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 184,
                              "end": 190
                            },
                            "start": 182,
                            "end": 190
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 180,
                          "end": 190
                        }
                      ],
                      "start": 178,
                      "end": 192
                    },
                    "start": 176,
                    "end": 192
                  },
                  "start": 175,
                  "end": 192
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 195,
                  "end": 196
                },
                "definite": false,
                "start": 175,
                "end": 196
              }
            ],
            "declare": false,
            "start": 171,
            "end": 197
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 209,
              "end": 210
            },
            "start": 202,
            "end": 211
          }
        ],
        "start": 165,
        "end": 213
      },
      "expression": false,
      "start": 145,
      "end": 213
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
            "name": "r",
            "optional": false,
            "typeAnnotation": null,
            "start": 219,
            "end": 220
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "f",
              "optional": false,
              "typeAnnotation": null,
              "start": 223,
              "end": 224
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
                      "name": "s",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 227,
                      "end": 228
                    },
                    "value": {
                      "type": "NewExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Object",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 234,
                        "end": 240
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "start": 230,
                      "end": 242
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 227,
                    "end": 242
                  }
                ],
                "start": 225,
                "end": 244
              }
            ],
            "optional": false,
            "start": 223,
            "end": 245
          },
          "definite": false,
          "start": 219,
          "end": 245
        }
      ],
      "declare": false,
      "start": 215,
      "end": 246
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "LogicalExpression",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "r",
            "optional": false,
            "typeAnnotation": null,
            "start": 253,
            "end": 254
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "s",
            "optional": false,
            "typeAnnotation": null,
            "start": 255,
            "end": 256
          },
          "optional": false,
          "computed": false,
          "start": 253,
          "end": 256
        },
        "operator": "&&",
        "right": {
          "type": "CallExpression",
          "callee": {
            "type": "MemberExpression",
            "object": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "r",
                "optional": false,
                "typeAnnotation": null,
                "start": 260,
                "end": 261
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": null,
                "start": 262,
                "end": 263
              },
              "optional": false,
              "computed": false,
              "start": 260,
              "end": 263
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "toFixed",
              "optional": false,
              "typeAnnotation": null,
              "start": 264,
              "end": 271
            },
            "optional": false,
            "computed": false,
            "start": 260,
            "end": 271
          },
          "typeArguments": null,
          "arguments": [],
          "optional": false,
          "start": 260,
          "end": 273
        },
        "start": 253,
        "end": 273
      },
      "directive": null,
      "start": 253,
      "end": 274
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 145,
  "end": 302
}
```
