__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 354,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 12,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 11,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 7,
            "name": "aaa",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 10,
            "end": 11,
            "value": 1,
            "raw": "1"
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 13,
      "end": 203,
      "id": {
        "type": "Identifier",
        "start": 19,
        "end": 22,
        "name": "CCC",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 23,
        "end": 203,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 29,
            "end": 45,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 29,
              "end": 30,
              "name": "y",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "Identifier",
              "start": 41,
              "end": 44,
              "name": "aaa",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 30,
              "end": 38,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 32,
                "end": 38
              }
            },
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 50,
            "end": 79,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 57,
              "end": 64,
              "name": "staticY",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "Identifier",
              "start": 75,
              "end": 78,
              "name": "aaa",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 64,
              "end": 72,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 66,
                "end": 72
              }
            },
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 110,
            "end": 201,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 110,
              "end": 121,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "FunctionExpression",
              "start": 121,
              "end": 201,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 122,
                  "end": 125,
                  "name": "aaa",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 127,
                "end": 201,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 137,
                    "end": 149,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 137,
                      "end": 148,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 137,
                        "end": 143,
                        "object": {
                          "type": "ThisExpression",
                          "start": 137,
                          "end": 141
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 142,
                          "end": 143,
                          "name": "y",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "right": {
                        "type": "Literal",
                        "start": 146,
                        "end": 148,
                        "value": "",
                        "raw": "''"
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
    },
    {
      "type": "VariableDeclaration",
      "start": 237,
      "end": 250,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 241,
          "end": 249,
          "id": {
            "type": "Identifier",
            "start": 241,
            "end": 245,
            "name": "aaaa",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 248,
            "end": 249,
            "value": 1,
            "raw": "1"
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 251,
      "end": 351,
      "id": {
        "type": "Identifier",
        "start": 257,
        "end": 261,
        "name": "CCCC",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 262,
        "end": 351,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 268,
            "end": 275,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 268,
              "end": 269,
              "name": "y",
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
              "start": 269,
              "end": 274,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 271,
                "end": 274
              }
            },
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 280,
            "end": 349,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 280,
              "end": 291,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "FunctionExpression",
              "start": 291,
              "end": 349,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 292,
                  "end": 296,
                  "name": "aaaa",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 298,
                "end": 349,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 308,
                    "end": 322,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 308,
                      "end": 321,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 308,
                        "end": 314,
                        "object": {
                          "type": "ThisExpression",
                          "start": 308,
                          "end": 312
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 313,
                          "end": 314,
                          "name": "y",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 317,
                        "end": 321,
                        "name": "aaaa",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    },
                    "directive": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 331,
                    "end": 343,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 331,
                      "end": 342,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 331,
                        "end": 337,
                        "object": {
                          "type": "ThisExpression",
                          "start": 331,
                          "end": 335
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 336,
                          "end": 337,
                          "name": "y",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "right": {
                        "type": "Literal",
                        "start": 340,
                        "end": 342,
                        "value": "",
                        "raw": "''"
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
