__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 420,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 141,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 7,
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 141,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 14,
            "end": 24,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 14,
              "end": 15,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 15,
              "end": 23,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 17,
                "end": 23
              }
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 29,
            "end": 40,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 29,
              "end": 30,
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": null,
            "value": {
              "type": "MemberExpression",
              "start": 33,
              "end": 39,
              "object": {
                "type": "ThisExpression",
                "start": 33,
                "end": 37
              },
              "property": {
                "type": "Identifier",
                "start": 38,
                "end": 39,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 55,
            "end": 72,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 55,
              "end": 56,
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": null,
            "value": {
              "type": "ArrowFunctionExpression",
              "start": 59,
              "end": 71,
              "expression": true,
              "async": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "MemberExpression",
                "start": 65,
                "end": 71,
                "object": {
                  "type": "ThisExpression",
                  "start": 65,
                  "end": 69
                },
                "property": {
                  "type": "Identifier",
                  "start": 70,
                  "end": 71,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "id": null,
              "generator": false
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 77,
            "end": 93,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 77,
              "end": 78,
              "decorators": [],
              "name": "d",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": null,
            "value": {
              "type": "MemberExpression",
              "start": 81,
              "end": 92,
              "object": {
                "type": "NewExpression",
                "start": 82,
                "end": 89,
                "callee": {
                  "type": "Identifier",
                  "start": 86,
                  "end": 87,
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null,
                "arguments": []
              },
              "property": {
                "type": "Identifier",
                "start": 91,
                "end": 92,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 98,
            "end": 139,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 98,
              "end": 109,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 109,
              "end": 139,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 112,
                "end": 139,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 122,
                    "end": 133,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 122,
                      "end": 132,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 122,
                        "end": 128,
                        "object": {
                          "type": "ThisExpression",
                          "start": 122,
                          "end": 126
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 127,
                          "end": 128,
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "right": {
                        "type": "Literal",
                        "start": 131,
                        "end": 132,
                        "value": 1,
                        "raw": "1"
                      }
                    },
                    "directive": null
                  }
                ]
              },
              "expression": false
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 143,
      "end": 180,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 149,
        "end": 150,
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "start": 159,
        "end": 160,
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 161,
        "end": 180,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 167,
            "end": 178,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 167,
              "end": 168,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": null,
            "value": {
              "type": "MemberExpression",
              "start": 171,
              "end": 177,
              "object": {
                "type": "ThisExpression",
                "start": 171,
                "end": 175
              },
              "property": {
                "type": "Identifier",
                "start": 176,
                "end": 177,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 182,
      "end": 225,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 188,
        "end": 189,
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 190,
        "end": 225,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 196,
            "end": 207,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 196,
              "end": 197,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 198,
              "end": 206,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 200,
                "end": 206
              }
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": true,
            "readonly": false,
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 212,
            "end": 223,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 212,
              "end": 213,
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": null,
            "value": {
              "type": "MemberExpression",
              "start": 216,
              "end": 222,
              "object": {
                "type": "ThisExpression",
                "start": 216,
                "end": 220
              },
              "property": {
                "type": "Identifier",
                "start": 221,
                "end": 222,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 249,
      "end": 378,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 255,
        "end": 258,
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 259,
        "end": 378,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 265,
            "end": 282,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 273,
              "end": 276,
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 276,
              "end": 281,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 278,
                "end": 281,
                "typeName": {
                  "type": "Identifier",
                  "start": 278,
                  "end": 281,
                  "decorators": [],
                  "name": "Bar",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "private"
          },
          {
            "type": "PropertyDefinition",
            "start": 287,
            "end": 320,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 296,
              "end": 303,
              "decorators": [],
              "name": "barProp",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": null,
            "value": {
              "type": "MemberExpression",
              "start": 306,
              "end": 319,
              "object": {
                "type": "MemberExpression",
                "start": 306,
                "end": 314,
                "object": {
                  "type": "ThisExpression",
                  "start": 306,
                  "end": 310
                },
                "property": {
                  "type": "Identifier",
                  "start": 311,
                  "end": 314,
                  "decorators": [],
                  "name": "bar",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "property": {
                "type": "Identifier",
                "start": 315,
                "end": 319,
                "decorators": [],
                "name": "prop",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": true,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 325,
            "end": 376,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 325,
              "end": 336,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 336,
              "end": 376,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 339,
                "end": 376,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 349,
                    "end": 370,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 349,
                      "end": 369,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 349,
                        "end": 357,
                        "object": {
                          "type": "ThisExpression",
                          "start": 349,
                          "end": 353
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 354,
                          "end": 357,
                          "decorators": [],
                          "name": "bar",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "right": {
                        "type": "NewExpression",
                        "start": 360,
                        "end": 369,
                        "callee": {
                          "type": "Identifier",
                          "start": 364,
                          "end": 367,
                          "decorators": [],
                          "name": "Bar",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null,
                        "arguments": []
                      }
                    },
                    "directive": null
                  }
                ]
              },
              "expression": false
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 380,
      "end": 420,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 386,
        "end": 389,
        "decorators": [],
        "name": "Bar",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 390,
        "end": 420,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 396,
            "end": 418,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 405,
              "end": 409,
              "decorators": [],
              "name": "prop",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "start": 412,
              "end": 417,
              "value": false,
              "raw": "false"
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": true,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
