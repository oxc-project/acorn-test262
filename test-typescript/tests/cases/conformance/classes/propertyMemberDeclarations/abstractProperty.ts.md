__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 220,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 108,
      "abstract": true,
      "body": {
        "type": "ClassBody",
        "start": 17,
        "end": 108,
        "body": [
          {
            "type": "TSAbstractPropertyDefinition",
            "start": 23,
            "end": 52,
            "accessibility": "protected",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 42,
              "end": 43,
              "decorators": [],
              "name": "x",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 43,
              "end": 51,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 45,
                "end": 51
              }
            },
            "value": null
          },
          {
            "type": "MethodDefinition",
            "start": 57,
            "end": 106,
            "accessibility": "public",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 64,
              "end": 67,
              "decorators": [],
              "name": "foo",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 67,
              "end": 106,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 70,
                "end": 106,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 80,
                    "end": 100,
                    "expression": {
                      "type": "CallExpression",
                      "start": 80,
                      "end": 99,
                      "arguments": [
                        {
                          "type": "MemberExpression",
                          "start": 92,
                          "end": 98,
                          "computed": false,
                          "object": {
                            "type": "ThisExpression",
                            "start": 92,
                            "end": 96
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 97,
                            "end": 98,
                            "decorators": [],
                            "name": "x",
                            "optional": false
                          }
                        }
                      ],
                      "callee": {
                        "type": "MemberExpression",
                        "start": 80,
                        "end": 91,
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "start": 80,
                          "end": 87,
                          "decorators": [],
                          "name": "console",
                          "optional": false
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 88,
                          "end": 91,
                          "decorators": [],
                          "name": "log",
                          "optional": false
                        }
                      },
                      "optional": false
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": []
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 15,
        "end": 16,
        "decorators": [],
        "name": "A",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "ClassDeclaration",
      "start": 110,
      "end": 156,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 128,
        "end": 156,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 134,
            "end": 154,
            "accessibility": "protected",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 144,
              "end": 145,
              "decorators": [],
              "name": "x",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "value": {
              "type": "Literal",
              "start": 148,
              "end": 153,
              "raw": "'B.x'",
              "value": "B.x"
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 116,
        "end": 117,
        "decorators": [],
        "name": "B",
        "optional": false
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 126,
        "end": 127,
        "decorators": [],
        "name": "A",
        "optional": false
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 158,
      "end": 219,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 176,
        "end": 219,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 182,
            "end": 216,
            "accessibility": "protected",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 196,
              "end": 197,
              "decorators": [],
              "name": "x",
              "optional": false
            },
            "kind": "get",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 197,
              "end": 216,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 200,
                "end": 216,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 202,
                    "end": 214,
                    "argument": {
                      "type": "Literal",
                      "start": 209,
                      "end": 214,
                      "raw": "'C.x'",
                      "value": "C.x"
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": []
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 164,
        "end": 165,
        "decorators": [],
        "name": "C",
        "optional": false
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 174,
        "end": 175,
        "decorators": [],
        "name": "A",
        "optional": false
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
