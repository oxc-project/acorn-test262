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
      "end": 42,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 7,
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
        "start": 8,
        "end": 42,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 14,
            "end": 40,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 14,
              "end": 15,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 15,
              "end": 23,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 17,
                "end": 23
              }
            },
            "value": {
              "type": "Literal",
              "start": 26,
              "end": 39,
              "value": "Hello world",
              "raw": "\"Hello world\""
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
      "start": 44,
      "end": 148,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 50,
        "end": 51,
        "decorators": [],
        "name": "D",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 52,
        "end": 148,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 58,
            "end": 84,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 58,
              "end": 59,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 59,
              "end": 67,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 61,
                "end": 67
              }
            },
            "value": {
              "type": "Literal",
              "start": 70,
              "end": 83,
              "value": "Hello world",
              "raw": "\"Hello world\""
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
            "start": 89,
            "end": 99,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 89,
              "end": 90,
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 90,
              "end": 98,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 92,
                "end": 98
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
            "type": "MethodDefinition",
            "start": 104,
            "end": 146,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 104,
              "end": 115,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 115,
              "end": 146,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 118,
                "end": 146,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 128,
                    "end": 140,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 128,
                      "end": 139,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 128,
                        "end": 134,
                        "object": {
                          "type": "ThisExpression",
                          "start": 128,
                          "end": 132
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 133,
                          "end": 134,
                          "decorators": [],
                          "name": "y",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "right": {
                        "type": "Literal",
                        "start": 137,
                        "end": 139,
                        "value": 10,
                        "raw": "10"
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
      "start": 150,
      "end": 193,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 156,
        "end": 157,
        "decorators": [],
        "name": "E",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "start": 166,
        "end": 167,
        "decorators": [],
        "name": "D",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 167,
        "end": 193,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 173,
            "end": 191,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 173,
              "end": 174,
              "decorators": [],
              "name": "z",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 174,
              "end": 183,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 176,
                "end": 183
              }
            },
            "value": {
              "type": "Literal",
              "start": 186,
              "end": 190,
              "value": true,
              "raw": "true"
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
      "start": 195,
      "end": 319,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 201,
        "end": 202,
        "decorators": [],
        "name": "F",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "start": 211,
        "end": 212,
        "decorators": [],
        "name": "D",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 212,
        "end": 319,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 218,
            "end": 236,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 218,
              "end": 219,
              "decorators": [],
              "name": "z",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 219,
              "end": 228,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 221,
                "end": 228
              }
            },
            "value": {
              "type": "Literal",
              "start": 231,
              "end": 235,
              "value": true,
              "raw": "true"
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
            "start": 241,
            "end": 251,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 241,
              "end": 242,
              "decorators": [],
              "name": "j",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 242,
              "end": 250,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 244,
                "end": 250
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
            "type": "MethodDefinition",
            "start": 256,
            "end": 317,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 256,
              "end": 267,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 267,
              "end": 317,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 270,
                "end": 317,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 280,
                    "end": 288,
                    "expression": {
                      "type": "CallExpression",
                      "start": 280,
                      "end": 287,
                      "callee": {
                        "type": "Super",
                        "start": 280,
                        "end": 285
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false
                    },
                    "directive": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 297,
                    "end": 311,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 297,
                      "end": 310,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 297,
                        "end": 303,
                        "object": {
                          "type": "ThisExpression",
                          "start": 297,
                          "end": 301
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 302,
                          "end": 303,
                          "decorators": [],
                          "name": "j",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "right": {
                        "type": "Literal",
                        "start": 306,
                        "end": 310,
                        "value": "HI",
                        "raw": "\"HI\""
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
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
