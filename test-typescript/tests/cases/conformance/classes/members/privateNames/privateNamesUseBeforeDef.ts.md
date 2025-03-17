__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 275,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 56,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 56,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 14,
            "end": 31,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "PrivateIdentifier",
              "start": 14,
              "end": 18,
              "name": "foo"
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": null,
            "value": {
              "type": "MemberExpression",
              "start": 21,
              "end": 30,
              "computed": false,
              "object": {
                "type": "ThisExpression",
                "start": 21,
                "end": 25
              },
              "optional": false,
              "property": {
                "type": "PrivateIdentifier",
                "start": 26,
                "end": 30,
                "name": "bar"
              }
            }
          },
          {
            "type": "PropertyDefinition",
            "start": 45,
            "end": 54,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "PrivateIdentifier",
              "start": 45,
              "end": 49,
              "name": "bar"
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "start": 52,
              "end": 53,
              "raw": "3",
              "value": 3
            }
          }
        ]
      },
      "declare": false,
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
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 58,
      "end": 131,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 67,
        "end": 131,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 73,
            "end": 92,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "PrivateIdentifier",
              "start": 73,
              "end": 77,
              "name": "foo"
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": null,
            "value": {
              "type": "CallExpression",
              "start": 80,
              "end": 91,
              "arguments": [],
              "callee": {
                "type": "MemberExpression",
                "start": 80,
                "end": 89,
                "computed": false,
                "object": {
                  "type": "ThisExpression",
                  "start": 80,
                  "end": 84
                },
                "optional": false,
                "property": {
                  "type": "PrivateIdentifier",
                  "start": 85,
                  "end": 89,
                  "name": "bar"
                }
              },
              "optional": false,
              "typeArguments": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 109,
            "end": 128,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "PrivateIdentifier",
              "start": 109,
              "end": 113,
              "name": "bar"
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 113,
              "end": 128,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 116,
                "end": 128,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 118,
                    "end": 126,
                    "argument": {
                      "type": "Literal",
                      "start": 125,
                      "end": 126,
                      "raw": "3",
                      "value": 3
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": null,
              "typeParameters": null
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 64,
        "end": 66,
        "decorators": [],
        "name": "A2",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 133,
      "end": 208,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 142,
        "end": 208,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 148,
            "end": 165,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "PrivateIdentifier",
              "start": 148,
              "end": 152,
              "name": "foo"
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": null,
            "value": {
              "type": "MemberExpression",
              "start": 155,
              "end": 164,
              "computed": false,
              "object": {
                "type": "ThisExpression",
                "start": 155,
                "end": 159
              },
              "optional": false,
              "property": {
                "type": "PrivateIdentifier",
                "start": 160,
                "end": 164,
                "name": "bar"
              }
            }
          },
          {
            "type": "MethodDefinition",
            "start": 182,
            "end": 205,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "PrivateIdentifier",
              "start": 186,
              "end": 190,
              "name": "bar"
            },
            "kind": "get",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 190,
              "end": 205,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 193,
                "end": 205,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 195,
                    "end": 203,
                    "argument": {
                      "type": "Literal",
                      "start": 202,
                      "end": 203,
                      "raw": "3",
                      "value": 3
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": null,
              "typeParameters": null
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 139,
        "end": 141,
        "decorators": [],
        "name": "A3",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 210,
      "end": 274,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 218,
        "end": 274,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 224,
            "end": 241,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "PrivateIdentifier",
              "start": 224,
              "end": 228,
              "name": "foo"
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": null,
            "value": {
              "type": "MemberExpression",
              "start": 231,
              "end": 240,
              "computed": false,
              "object": {
                "type": "ThisExpression",
                "start": 231,
                "end": 235
              },
              "optional": false,
              "property": {
                "type": "PrivateIdentifier",
                "start": 236,
                "end": 240,
                "name": "bar"
              }
            }
          },
          {
            "type": "PropertyDefinition",
            "start": 255,
            "end": 272,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "PrivateIdentifier",
              "start": 255,
              "end": 259,
              "name": "bar"
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": null,
            "value": {
              "type": "MemberExpression",
              "start": 262,
              "end": 271,
              "computed": false,
              "object": {
                "type": "ThisExpression",
                "start": 262,
                "end": 266
              },
              "optional": false,
              "property": {
                "type": "PrivateIdentifier",
                "start": 267,
                "end": 271,
                "name": "foo"
              }
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 216,
        "end": 217,
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
