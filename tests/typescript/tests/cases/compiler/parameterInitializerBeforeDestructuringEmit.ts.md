__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 13
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null,
              "start": 20,
              "end": 23
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 26,
                "end": 29
              },
              "start": 24,
              "end": 29
            },
            "accessibility": null,
            "static": false,
            "start": 20,
            "end": 30
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "baz",
              "optional": false,
              "typeAnnotation": null,
              "start": 35,
              "end": 38
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 41,
                "end": 44
              },
              "start": 39,
              "end": 44
            },
            "accessibility": null,
            "static": false,
            "start": 35,
            "end": 45
          }
        ],
        "start": 14,
        "end": 47
      },
      "declare": false,
      "start": 0,
      "end": 47
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foobar",
        "optional": false,
        "typeAnnotation": null,
        "start": 58,
        "end": 64
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "AssignmentPattern",
          "decorators": [],
          "left": {
            "type": "ObjectPattern",
            "decorators": [],
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "bar",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 67,
                  "end": 70
                },
                "value": {
                  "type": "AssignmentPattern",
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "bar",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 67,
                    "end": 70
                  },
                  "right": {
                    "type": "ObjectExpression",
                    "properties": [],
                    "start": 73,
                    "end": 75
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 67,
                  "end": 75
                },
                "method": false,
                "shorthand": true,
                "computed": false,
                "optional": false,
                "start": 67,
                "end": 75
              },
              {
                "type": "RestElement",
                "decorators": [],
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "opts",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 80,
                  "end": 84
                },
                "optional": false,
                "typeAnnotation": null,
                "value": null,
                "start": 77,
                "end": 84
              }
            ],
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 88,
                  "end": 91
                },
                "typeArguments": null,
                "start": 88,
                "end": 91
              },
              "start": 86,
              "end": 91
            },
            "start": 65,
            "end": 91
          },
          "right": {
            "type": "ObjectExpression",
            "properties": [],
            "start": 94,
            "end": 96
          },
          "optional": false,
          "typeAnnotation": null,
          "start": 65,
          "end": 96
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Literal",
              "value": "use strict",
              "raw": "\"use strict\"",
              "start": 104,
              "end": 116
            },
            "directive": "use strict",
            "start": 104,
            "end": 117
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Literal",
              "value": "Some other prologue",
              "raw": "\"Some other prologue\"",
              "start": 122,
              "end": 143
            },
            "directive": "Some other prologue",
            "start": 122,
            "end": 144
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "opts",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 149,
                  "end": 153
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "baz",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 154,
                  "end": 157
                },
                "optional": false,
                "computed": false,
                "start": 149,
                "end": 157
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "bar",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 158,
                  "end": 161
                }
              ],
              "optional": false,
              "start": 149,
              "end": 162
            },
            "directive": null,
            "start": 149,
            "end": 163
          }
        ],
        "start": 98,
        "end": 165
      },
      "expression": false,
      "start": 49,
      "end": 165
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
        "start": 173,
        "end": 174
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 181,
              "end": 192
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "AssignmentPattern",
                  "decorators": [],
                  "left": {
                    "type": "ObjectPattern",
                    "decorators": [],
                    "properties": [
                      {
                        "type": "Property",
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "bar",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 195,
                          "end": 198
                        },
                        "value": {
                          "type": "AssignmentPattern",
                          "decorators": [],
                          "left": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "bar",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 195,
                            "end": 198
                          },
                          "right": {
                            "type": "ObjectExpression",
                            "properties": [],
                            "start": 201,
                            "end": 203
                          },
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 195,
                          "end": 203
                        },
                        "method": false,
                        "shorthand": true,
                        "computed": false,
                        "optional": false,
                        "start": 195,
                        "end": 203
                      },
                      {
                        "type": "RestElement",
                        "decorators": [],
                        "argument": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "opts",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 208,
                          "end": 212
                        },
                        "optional": false,
                        "typeAnnotation": null,
                        "value": null,
                        "start": 205,
                        "end": 212
                      }
                    ],
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Foo",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 216,
                          "end": 219
                        },
                        "typeArguments": null,
                        "start": 216,
                        "end": 219
                      },
                      "start": 214,
                      "end": 219
                    },
                    "start": 193,
                    "end": 219
                  },
                  "right": {
                    "type": "ObjectExpression",
                    "properties": [],
                    "start": 222,
                    "end": 224
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 193,
                  "end": 224
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "Literal",
                      "value": "use strict",
                      "raw": "\"use strict\"",
                      "start": 236,
                      "end": 248
                    },
                    "directive": "use strict",
                    "start": 236,
                    "end": 249
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "Literal",
                      "value": "Some other prologue",
                      "raw": "\"Some other prologue\"",
                      "start": 258,
                      "end": 279
                    },
                    "directive": "Some other prologue",
                    "start": 258,
                    "end": 280
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "opts",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 289,
                          "end": 293
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "baz",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 294,
                          "end": 297
                        },
                        "optional": false,
                        "computed": false,
                        "start": 289,
                        "end": 297
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "bar",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 298,
                          "end": 301
                        }
                      ],
                      "optional": false,
                      "start": 289,
                      "end": 302
                    },
                    "directive": null,
                    "start": 289,
                    "end": 303
                  }
                ],
                "start": 226,
                "end": 309
              },
              "expression": false,
              "start": 192,
              "end": 309
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 181,
            "end": 309
          }
        ],
        "start": 175,
        "end": 311
      },
      "abstract": false,
      "declare": false,
      "start": 167,
      "end": 311
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 311
}
```
