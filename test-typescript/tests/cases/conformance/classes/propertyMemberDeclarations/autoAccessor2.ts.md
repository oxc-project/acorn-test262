__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 244,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 243,
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 8,
        "name": "C1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 9,
        "end": 243,
        "body": [
          {
            "type": "AccessorProperty",
            "start": 15,
            "end": 32,
            "key": {
              "type": "PrivateIdentifier",
              "start": 24,
              "end": 26,
              "name": "a"
            },
            "value": null,
            "computed": false,
            "static": false,
            "decorators": [],
            "definite": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 26,
              "end": 31,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 28,
                "end": 31
              }
            },
            "accessibility": null,
            "declare": false,
            "optional": false,
            "override": false,
            "readonly": false
          },
          {
            "type": "AccessorProperty",
            "start": 37,
            "end": 53,
            "key": {
              "type": "PrivateIdentifier",
              "start": 46,
              "end": 48,
              "name": "b"
            },
            "value": {
              "type": "Literal",
              "start": 51,
              "end": 52,
              "value": 1,
              "raw": "1"
            },
            "computed": false,
            "static": false,
            "decorators": [],
            "definite": false,
            "typeAnnotation": null,
            "accessibility": null,
            "declare": false,
            "optional": false,
            "override": false,
            "readonly": false
          },
          {
            "type": "AccessorProperty",
            "start": 58,
            "end": 82,
            "key": {
              "type": "PrivateIdentifier",
              "start": 74,
              "end": 76,
              "name": "c"
            },
            "value": null,
            "computed": false,
            "static": true,
            "decorators": [],
            "definite": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 76,
              "end": 81,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 78,
                "end": 81
              }
            },
            "accessibility": null,
            "declare": false,
            "optional": false,
            "override": false,
            "readonly": false
          },
          {
            "type": "AccessorProperty",
            "start": 87,
            "end": 110,
            "key": {
              "type": "PrivateIdentifier",
              "start": 103,
              "end": 105,
              "name": "d"
            },
            "value": {
              "type": "Literal",
              "start": 108,
              "end": 109,
              "value": 2,
              "raw": "2"
            },
            "computed": false,
            "static": true,
            "decorators": [],
            "definite": false,
            "typeAnnotation": null,
            "accessibility": null,
            "declare": false,
            "optional": false,
            "override": false,
            "readonly": false
          },
          {
            "type": "MethodDefinition",
            "start": 116,
            "end": 179,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 116,
              "end": 127,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "FunctionExpression",
              "start": 127,
              "end": 179,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 130,
                "end": 179,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 140,
                    "end": 152,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 140,
                      "end": 151,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 140,
                        "end": 147,
                        "object": {
                          "type": "ThisExpression",
                          "start": 140,
                          "end": 144
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "start": 145,
                          "end": 147,
                          "name": "a"
                        },
                        "computed": false,
                        "optional": false
                      },
                      "right": {
                        "type": "Literal",
                        "start": 150,
                        "end": 151,
                        "value": 3,
                        "raw": "3"
                      }
                    },
                    "directive": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 161,
                    "end": 173,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 161,
                      "end": 172,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 161,
                        "end": 168,
                        "object": {
                          "type": "ThisExpression",
                          "start": 161,
                          "end": 165
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "start": 166,
                          "end": 168,
                          "name": "b"
                        },
                        "computed": false,
                        "optional": false
                      },
                      "right": {
                        "type": "Literal",
                        "start": 171,
                        "end": 172,
                        "value": 4,
                        "raw": "4"
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
          },
          {
            "type": "StaticBlock",
            "start": 185,
            "end": 241,
            "body": [
              {
                "type": "ExpressionStatement",
                "start": 202,
                "end": 214,
                "expression": {
                  "type": "AssignmentExpression",
                  "start": 202,
                  "end": 213,
                  "operator": "=",
                  "left": {
                    "type": "MemberExpression",
                    "start": 202,
                    "end": 209,
                    "object": {
                      "type": "ThisExpression",
                      "start": 202,
                      "end": 206
                    },
                    "property": {
                      "type": "PrivateIdentifier",
                      "start": 207,
                      "end": 209,
                      "name": "c"
                    },
                    "computed": false,
                    "optional": false
                  },
                  "right": {
                    "type": "Literal",
                    "start": 212,
                    "end": 213,
                    "value": 5,
                    "raw": "5"
                  }
                },
                "directive": null
              },
              {
                "type": "ExpressionStatement",
                "start": 223,
                "end": 235,
                "expression": {
                  "type": "AssignmentExpression",
                  "start": 223,
                  "end": 234,
                  "operator": "=",
                  "left": {
                    "type": "MemberExpression",
                    "start": 223,
                    "end": 230,
                    "object": {
                      "type": "ThisExpression",
                      "start": 223,
                      "end": 227
                    },
                    "property": {
                      "type": "PrivateIdentifier",
                      "start": 228,
                      "end": 230,
                      "name": "d"
                    },
                    "computed": false,
                    "optional": false
                  },
                  "right": {
                    "type": "Literal",
                    "start": 233,
                    "end": 234,
                    "value": 6,
                    "raw": "6"
                  }
                },
                "directive": null
              }
            ]
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
