__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 273,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 20,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 12,
          "end": 20,
          "id": {
            "type": "Identifier",
            "start": 12,
            "end": 20,
            "name": "Err",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 15,
              "end": 20,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 17,
                "end": 20
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": true
    },
    {
      "type": "ClassDeclaration",
      "start": 21,
      "end": 222,
      "id": {
        "type": "Identifier",
        "start": 27,
        "end": 28,
        "name": "A",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 37,
        "end": 40,
        "name": "Err",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 41,
        "end": 222,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 47,
            "end": 62,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 47,
              "end": 54,
              "name": "payload",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 54,
              "end": 62,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 56,
                "end": 62
              }
            },
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 67,
            "end": 163,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 67,
              "end": 78,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "FunctionExpression",
              "start": 78,
              "end": 163,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 81,
                "end": 163,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 91,
                    "end": 110,
                    "expression": {
                      "type": "CallExpression",
                      "start": 91,
                      "end": 110,
                      "callee": {
                        "type": "Super",
                        "start": 91,
                        "end": 96
                      },
                      "arguments": [
                        {
                          "type": "Literal",
                          "start": 97,
                          "end": 98,
                          "value": 1,
                          "raw": "1"
                        },
                        {
                          "type": "Literal",
                          "start": 99,
                          "end": 100,
                          "value": 2,
                          "raw": "2"
                        },
                        {
                          "type": "Literal",
                          "start": 101,
                          "end": 102,
                          "value": 3,
                          "raw": "3"
                        },
                        {
                          "type": "Literal",
                          "start": 103,
                          "end": 104,
                          "value": 3,
                          "raw": "3"
                        },
                        {
                          "type": "Literal",
                          "start": 105,
                          "end": 106,
                          "value": 4,
                          "raw": "4"
                        },
                        {
                          "type": "Literal",
                          "start": 107,
                          "end": 109,
                          "value": 56,
                          "raw": "56"
                        }
                      ],
                      "optional": false,
                      "typeArguments": null
                    },
                    "directive": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 119,
                    "end": 132,
                    "expression": {
                      "type": "MemberExpression",
                      "start": 119,
                      "end": 132,
                      "object": {
                        "type": "Super",
                        "start": 119,
                        "end": 124
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 125,
                        "end": 132,
                        "name": "unknown",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
                    },
                    "directive": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 141,
                    "end": 157,
                    "expression": {
                      "type": "MemberExpression",
                      "start": 141,
                      "end": 157,
                      "object": {
                        "type": "Super",
                        "start": 141,
                        "end": 146
                      },
                      "property": {
                        "type": "Literal",
                        "start": 147,
                        "end": 156,
                        "value": "unknown",
                        "raw": "'unknown'"
                      },
                      "computed": true,
                      "optional": false
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
          },
          {
            "type": "MethodDefinition",
            "start": 168,
            "end": 220,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 168,
              "end": 175,
              "name": "process",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 175,
              "end": 220,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 178,
                "end": 220,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 188,
                    "end": 214,
                    "argument": {
                      "type": "BinaryExpression",
                      "start": 195,
                      "end": 213,
                      "left": {
                        "type": "MemberExpression",
                        "start": 195,
                        "end": 207,
                        "object": {
                          "type": "ThisExpression",
                          "start": 195,
                          "end": 199
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 200,
                          "end": 207,
                          "name": "payload",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "operator": "+",
                      "right": {
                        "type": "Literal",
                        "start": 210,
                        "end": 213,
                        "value": "!",
                        "raw": "\"!\""
                      }
                    }
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
    },
    {
      "type": "VariableDeclaration",
      "start": 224,
      "end": 273,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 228,
          "end": 273,
          "id": {
            "type": "Identifier",
            "start": 228,
            "end": 229,
            "name": "o",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 232,
            "end": 273,
            "properties": [
              {
                "type": "Property",
                "start": 238,
                "end": 271,
                "method": true,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 238,
                  "end": 239,
                  "name": "m",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "FunctionExpression",
                  "start": 239,
                  "end": 271,
                  "id": null,
                  "expression": false,
                  "generator": false,
                  "async": false,
                  "params": [],
                  "body": {
                    "type": "BlockStatement",
                    "start": 242,
                    "end": 271,
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "start": 252,
                        "end": 265,
                        "expression": {
                          "type": "MemberExpression",
                          "start": 252,
                          "end": 265,
                          "object": {
                            "type": "Super",
                            "start": 252,
                            "end": 257
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 258,
                            "end": 265,
                            "name": "unknown",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "computed": false,
                          "optional": false
                        },
                        "directive": null
                      }
                    ]
                  },
                  "declare": false,
                  "typeParameters": null,
                  "returnType": null
                },
                "kind": "init",
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
