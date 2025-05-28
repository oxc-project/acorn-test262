__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 359,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 16,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 16,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 10,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 5,
              "end": 10,
              "typeAnnotation": {
                "type": "TSLiteralType",
                "start": 7,
                "end": 10,
                "literal": {
                  "type": "Literal",
                  "start": 7,
                  "end": 10,
                  "value": "p",
                  "raw": "\"p\""
                }
              }
            }
          },
          "init": {
            "type": "Literal",
            "start": 13,
            "end": 16,
            "value": "p",
            "raw": "\"p\""
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 17,
      "end": 197,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 23,
        "end": 24,
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
        "start": 25,
        "end": 197,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 31,
            "end": 41,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 31,
              "end": 32,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": null,
            "value": {
              "type": "MemberExpression",
              "start": 35,
              "end": 41,
              "object": {
                "type": "ThisExpression",
                "start": 35,
                "end": 39
              },
              "property": {
                "type": "Identifier",
                "start": 40,
                "end": 41,
                "decorators": [],
                "name": "y",
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
            "start": 46,
            "end": 47,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 46,
              "end": 47,
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": null,
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
            "start": 52,
            "end": 61,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 59,
              "end": 60,
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": null,
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "public"
          },
          {
            "type": "PropertyDefinition",
            "start": 66,
            "end": 89,
            "decorators": [],
            "key": {
              "type": "Literal",
              "start": 67,
              "end": 77,
              "value": "computed",
              "raw": "\"computed\""
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "start": 81,
              "end": 83,
              "value": 13,
              "raw": "13"
            },
            "computed": true,
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
            "start": 89,
            "end": 97,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 90,
              "end": 91,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "start": 95,
              "end": 97,
              "value": 14,
              "raw": "14"
            },
            "computed": true,
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
            "start": 102,
            "end": 109,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 102,
              "end": 103,
              "decorators": [],
              "name": "m",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 103,
              "end": 109,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 106,
                "end": 109,
                "body": []
              },
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 114,
            "end": 156,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 114,
              "end": 125,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 125,
              "end": 156,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "TSParameterProperty",
                  "start": 126,
                  "end": 151,
                  "accessibility": "public",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "start": 142,
                    "end": 151,
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 143,
                      "end": 151,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 145,
                        "end": 151
                      }
                    }
                  },
                  "readonly": true,
                  "static": false
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 153,
                "end": 156,
                "body": []
              },
              "expression": false
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 161,
            "end": 171,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 161,
              "end": 162,
              "decorators": [],
              "name": "z",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": null,
            "value": {
              "type": "MemberExpression",
              "start": 165,
              "end": 171,
              "object": {
                "type": "ThisExpression",
                "start": 165,
                "end": 169
              },
              "property": {
                "type": "Identifier",
                "start": 170,
                "end": 171,
                "decorators": [],
                "name": "y",
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
            "start": 176,
            "end": 195,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 184,
              "end": 194,
              "decorators": [],
              "name": "notEmitted",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": null,
            "value": null,
            "computed": false,
            "static": false,
            "declare": true,
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
      "start": 198,
      "end": 223,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 204,
        "end": 205,
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 206,
        "end": 223,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 212,
            "end": 221,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 219,
              "end": 220,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": null,
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "public"
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 224,
      "end": 359,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 230,
        "end": 231,
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "start": 240,
        "end": 241,
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 242,
        "end": 359,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 248,
            "end": 265,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 263,
              "end": 264,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": null,
            "value": null,
            "computed": false,
            "static": false,
            "declare": true,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "public"
          },
          {
            "type": "PropertyDefinition",
            "start": 270,
            "end": 281,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 270,
              "end": 271,
              "decorators": [],
              "name": "z",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": null,
            "value": {
              "type": "MemberExpression",
              "start": 274,
              "end": 281,
              "object": {
                "type": "ThisExpression",
                "start": 274,
                "end": 278
              },
              "property": {
                "type": "Identifier",
                "start": 279,
                "end": 281,
                "decorators": [],
                "name": "ka",
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
            "start": 286,
            "end": 340,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 286,
              "end": 297,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 297,
              "end": 340,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "TSParameterProperty",
                  "start": 298,
                  "end": 315,
                  "accessibility": "public",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "start": 305,
                    "end": 315,
                    "decorators": [],
                    "name": "ka",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 307,
                      "end": 315,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 309,
                        "end": 315
                      }
                    }
                  },
                  "readonly": false,
                  "static": false
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 317,
                "end": 340,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 327,
                    "end": 334,
                    "expression": {
                      "type": "CallExpression",
                      "start": 327,
                      "end": 334,
                      "callee": {
                        "type": "Super",
                        "start": 327,
                        "end": 332
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false
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
          },
          {
            "type": "PropertyDefinition",
            "start": 345,
            "end": 357,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 345,
              "end": 347,
              "decorators": [],
              "name": "ki",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": null,
            "value": {
              "type": "MemberExpression",
              "start": 350,
              "end": 357,
              "object": {
                "type": "ThisExpression",
                "start": 350,
                "end": 354
              },
              "property": {
                "type": "Identifier",
                "start": 355,
                "end": 357,
                "decorators": [],
                "name": "ka",
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
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
