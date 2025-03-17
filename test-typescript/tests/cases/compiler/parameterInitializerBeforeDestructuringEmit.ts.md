__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 312,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 47,
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 13,
        "name": "Foo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 14,
        "end": 47,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 20,
            "end": 30,
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 20,
              "end": 23,
              "name": "bar",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 24,
              "end": 29,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 26,
                "end": 29
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 35,
            "end": 45,
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 35,
              "end": 38,
              "name": "baz",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 39,
              "end": 44,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 41,
                "end": 44
              }
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 49,
      "end": 165,
      "id": {
        "type": "Identifier",
        "start": 58,
        "end": 64,
        "name": "foobar",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "AssignmentPattern",
          "start": 65,
          "end": 96,
          "left": {
            "type": "ObjectPattern",
            "start": 65,
            "end": 91,
            "properties": [
              {
                "type": "Property",
                "start": 67,
                "end": 75,
                "method": false,
                "shorthand": true,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 67,
                  "end": 70,
                  "name": "bar",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "AssignmentPattern",
                  "start": 67,
                  "end": 75,
                  "left": {
                    "type": "Identifier",
                    "start": 67,
                    "end": 70,
                    "name": "bar",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "right": {
                    "type": "ObjectExpression",
                    "start": 73,
                    "end": 75,
                    "properties": []
                  },
                  "decorators": [],
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "RestElement",
                "start": 77,
                "end": 84,
                "argument": {
                  "type": "Identifier",
                  "start": 80,
                  "end": 84,
                  "name": "opts",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "decorators": [],
                "optional": false,
                "typeAnnotation": null,
                "value": null
              }
            ],
            "decorators": [],
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 86,
              "end": 91,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 88,
                "end": 91,
                "typeName": {
                  "type": "Identifier",
                  "start": 88,
                  "end": 91,
                  "name": "Foo",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            }
          },
          "right": {
            "type": "ObjectExpression",
            "start": 94,
            "end": 96,
            "properties": []
          },
          "decorators": [],
          "optional": false,
          "typeAnnotation": null
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 98,
        "end": 165,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 104,
            "end": 117,
            "expression": {
              "type": "Literal",
              "start": 104,
              "end": 116,
              "value": "use strict",
              "raw": "\"use strict\""
            },
            "directive": "use strict"
          },
          {
            "type": "ExpressionStatement",
            "start": 122,
            "end": 144,
            "expression": {
              "type": "Literal",
              "start": 122,
              "end": 143,
              "value": "Some other prologue",
              "raw": "\"Some other prologue\""
            },
            "directive": "Some other prologue"
          },
          {
            "type": "ExpressionStatement",
            "start": 149,
            "end": 163,
            "expression": {
              "type": "CallExpression",
              "start": 149,
              "end": 162,
              "callee": {
                "type": "MemberExpression",
                "start": 149,
                "end": 157,
                "object": {
                  "type": "Identifier",
                  "start": 149,
                  "end": 153,
                  "name": "opts",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 154,
                  "end": 157,
                  "name": "baz",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 158,
                  "end": 161,
                  "name": "bar",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              ],
              "optional": false,
              "typeArguments": null
            },
            "directive": null
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "ClassDeclaration",
      "start": 167,
      "end": 311,
      "id": {
        "type": "Identifier",
        "start": 173,
        "end": 174,
        "name": "C",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 175,
        "end": 311,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 181,
            "end": 309,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 181,
              "end": 192,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "FunctionExpression",
              "start": 192,
              "end": 309,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "AssignmentPattern",
                  "start": 193,
                  "end": 224,
                  "left": {
                    "type": "ObjectPattern",
                    "start": 193,
                    "end": 219,
                    "properties": [
                      {
                        "type": "Property",
                        "start": 195,
                        "end": 203,
                        "method": false,
                        "shorthand": true,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 195,
                          "end": 198,
                          "name": "bar",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "value": {
                          "type": "AssignmentPattern",
                          "start": 195,
                          "end": 203,
                          "left": {
                            "type": "Identifier",
                            "start": 195,
                            "end": 198,
                            "name": "bar",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "right": {
                            "type": "ObjectExpression",
                            "start": 201,
                            "end": 203,
                            "properties": []
                          },
                          "decorators": [],
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "kind": "init",
                        "optional": false
                      },
                      {
                        "type": "RestElement",
                        "start": 205,
                        "end": 212,
                        "argument": {
                          "type": "Identifier",
                          "start": 208,
                          "end": 212,
                          "name": "opts",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "decorators": [],
                        "optional": false,
                        "typeAnnotation": null,
                        "value": null
                      }
                    ],
                    "decorators": [],
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 214,
                      "end": 219,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 216,
                        "end": 219,
                        "typeName": {
                          "type": "Identifier",
                          "start": 216,
                          "end": 219,
                          "name": "Foo",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    }
                  },
                  "right": {
                    "type": "ObjectExpression",
                    "start": 222,
                    "end": 224,
                    "properties": []
                  },
                  "decorators": [],
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 226,
                "end": 309,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 236,
                    "end": 249,
                    "expression": {
                      "type": "Literal",
                      "start": 236,
                      "end": 248,
                      "value": "use strict",
                      "raw": "\"use strict\""
                    },
                    "directive": "use strict"
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 258,
                    "end": 280,
                    "expression": {
                      "type": "Literal",
                      "start": 258,
                      "end": 279,
                      "value": "Some other prologue",
                      "raw": "\"Some other prologue\""
                    },
                    "directive": "Some other prologue"
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 289,
                    "end": 303,
                    "expression": {
                      "type": "CallExpression",
                      "start": 289,
                      "end": 302,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 289,
                        "end": 297,
                        "object": {
                          "type": "Identifier",
                          "start": 289,
                          "end": 293,
                          "name": "opts",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 294,
                          "end": 297,
                          "name": "baz",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 298,
                          "end": 301,
                          "name": "bar",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        }
                      ],
                      "optional": false,
                      "typeArguments": null
                    },
                    "directive": null
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
