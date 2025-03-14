__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 200,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 79,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 79,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 14,
            "end": 27,
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
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 18,
              "end": 26,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 20,
                "end": 26
              }
            },
            "value": null
          },
          {
            "type": "MethodDefinition",
            "start": 32,
            "end": 77,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 32,
              "end": 43,
              "decorators": [],
              "name": "constructor",
              "optional": false
            },
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 44,
              "end": 77,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 47,
                "end": 77,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 57,
                    "end": 71,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 57,
                      "end": 70,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 57,
                        "end": 66,
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "start": 57,
                          "end": 61
                        },
                        "optional": false,
                        "property": {
                          "type": "PrivateIdentifier",
                          "start": 62,
                          "end": 66,
                          "name": "foo"
                        }
                      },
                      "right": {
                        "type": "Literal",
                        "start": 69,
                        "end": 70,
                        "raw": "3",
                        "value": 3
                      }
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
        "start": 6,
        "end": 7,
        "decorators": [],
        "name": "A",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "ClassDeclaration",
      "start": 81,
      "end": 199,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 99,
        "end": 199,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 105,
            "end": 118,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "PrivateIdentifier",
              "start": 105,
              "end": 109,
              "name": "foo"
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 109,
              "end": 117,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 111,
                "end": 117
              }
            },
            "value": null
          },
          {
            "type": "MethodDefinition",
            "start": 123,
            "end": 197,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 123,
              "end": 134,
              "decorators": [],
              "name": "constructor",
              "optional": false
            },
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 135,
              "end": 197,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 138,
                "end": 197,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 148,
                    "end": 156,
                    "expression": {
                      "type": "CallExpression",
                      "start": 148,
                      "end": 155,
                      "arguments": [],
                      "callee": {
                        "type": "Super",
                        "start": 148,
                        "end": 153
                      },
                      "optional": false
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 165,
                    "end": 191,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 165,
                      "end": 190,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 165,
                        "end": 174,
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "start": 165,
                          "end": 169
                        },
                        "optional": false,
                        "property": {
                          "type": "PrivateIdentifier",
                          "start": 170,
                          "end": 174,
                          "name": "foo"
                        }
                      },
                      "right": {
                        "type": "Literal",
                        "start": 177,
                        "end": 190,
                        "raw": "\"some string\"",
                        "value": "some string"
                      }
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
        "start": 87,
        "end": 88,
        "decorators": [],
        "name": "B",
        "optional": false
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 97,
        "end": 98,
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
