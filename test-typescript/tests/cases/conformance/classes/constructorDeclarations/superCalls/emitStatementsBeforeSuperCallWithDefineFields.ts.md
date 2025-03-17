__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 319,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 14,
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 10,
        "name": "Base",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 11,
        "end": 14,
        "body": []
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "ClassDeclaration",
      "start": 15,
      "end": 160,
      "id": {
        "type": "Identifier",
        "start": 21,
        "end": 24,
        "name": "Sub",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 33,
        "end": 37,
        "name": "Base",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 38,
        "end": 160,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 62,
            "end": 143,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 62,
              "end": 73,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "FunctionExpression",
              "start": 73,
              "end": 143,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "TSParameterProperty",
                  "start": 74,
                  "end": 90,
                  "accessibility": "public",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "start": 81,
                    "end": 90,
                    "name": "p",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 82,
                      "end": 90,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 84,
                        "end": 90
                      }
                    },
                    "decorators": [],
                    "optional": false
                  },
                  "readonly": false,
                  "static": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 92,
                "end": 143,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 102,
                    "end": 120,
                    "expression": {
                      "type": "CallExpression",
                      "start": 102,
                      "end": 119,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 102,
                        "end": 113,
                        "object": {
                          "type": "Identifier",
                          "start": 102,
                          "end": 109,
                          "name": "console",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 110,
                          "end": 113,
                          "name": "log",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "arguments": [
                        {
                          "type": "Literal",
                          "start": 114,
                          "end": 118,
                          "value": "hi",
                          "raw": "'hi'"
                        }
                      ],
                      "optional": false,
                      "typeArguments": null
                    },
                    "directive": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 129,
                    "end": 137,
                    "expression": {
                      "type": "CallExpression",
                      "start": 129,
                      "end": 136,
                      "callee": {
                        "type": "Super",
                        "start": 129,
                        "end": 134
                      },
                      "arguments": [],
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
          },
          {
            "type": "PropertyDefinition",
            "start": 148,
            "end": 158,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 148,
              "end": 153,
              "name": "field",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "Literal",
              "start": 156,
              "end": 157,
              "value": 0,
              "raw": "0"
            },
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": null,
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
      "type": "ClassDeclaration",
      "start": 162,
      "end": 318,
      "id": {
        "type": "Identifier",
        "start": 168,
        "end": 172,
        "name": "Test",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 181,
        "end": 185,
        "name": "Base",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 186,
        "end": 318,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 192,
            "end": 205,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 192,
              "end": 196,
              "name": "prop",
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
              "start": 196,
              "end": 204,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 198,
                "end": 204
              }
            },
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 228,
            "end": 316,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 228,
              "end": 239,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "FunctionExpression",
              "start": 239,
              "end": 316,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "TSParameterProperty",
                  "start": 240,
                  "end": 256,
                  "accessibility": "public",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "start": 247,
                    "end": 256,
                    "name": "p",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 248,
                      "end": 256,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 250,
                        "end": 256
                      }
                    },
                    "decorators": [],
                    "optional": false
                  },
                  "readonly": false,
                  "static": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 258,
                "end": 316,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 268,
                    "end": 270,
                    "expression": {
                      "type": "Literal",
                      "start": 268,
                      "end": 269,
                      "value": 1,
                      "raw": "1"
                    },
                    "directive": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 279,
                    "end": 287,
                    "expression": {
                      "type": "CallExpression",
                      "start": 279,
                      "end": 286,
                      "callee": {
                        "type": "Super",
                        "start": 279,
                        "end": 284
                      },
                      "arguments": [],
                      "optional": false,
                      "typeArguments": null
                    },
                    "directive": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 296,
                    "end": 310,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 296,
                      "end": 309,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 296,
                        "end": 305,
                        "object": {
                          "type": "ThisExpression",
                          "start": 296,
                          "end": 300
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 301,
                          "end": 305,
                          "name": "prop",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "right": {
                        "type": "Literal",
                        "start": 308,
                        "end": 309,
                        "value": 1,
                        "raw": "1"
                      }
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
