__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 192,
  "body": [
    {
      "type": "TSEnumDeclaration",
      "start": 0,
      "end": 32,
      "body": {
        "type": "TSEnumBody",
        "start": 16,
        "end": 32,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 22,
            "end": 25,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 22,
              "end": 25,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": null
          },
          {
            "type": "TSEnumMember",
            "start": 27,
            "end": 30,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 27,
              "end": 30,
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": null
          }
        ]
      },
      "const": false,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 15,
        "decorators": [],
        "name": "MyEnumType",
        "optional": false,
        "typeAnnotation": null
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 33,
      "end": 76,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 37,
          "end": 76,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 37,
            "end": 41,
            "decorators": [],
            "name": "_arr",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrayExpression",
            "start": 44,
            "end": 76,
            "elements": [
              {
                "type": "ObjectExpression",
                "start": 45,
                "end": 59,
                "properties": [
                  {
                    "type": "Property",
                    "start": 47,
                    "end": 57,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 47,
                      "end": 50,
                      "decorators": [],
                      "name": "key",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Literal",
                      "start": 52,
                      "end": 57,
                      "raw": "'foo'",
                      "value": "foo"
                    }
                  }
                ]
              },
              {
                "type": "ObjectExpression",
                "start": 61,
                "end": 75,
                "properties": [
                  {
                    "type": "Property",
                    "start": 63,
                    "end": 73,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 63,
                      "end": 66,
                      "decorators": [],
                      "name": "key",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Literal",
                      "start": 68,
                      "end": 73,
                      "raw": "'bar'",
                      "value": "bar"
                    }
                  }
                ]
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 77,
      "end": 108,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 81,
          "end": 107,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 81,
            "end": 90,
            "decorators": [],
            "name": "enumValue",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 93,
            "end": 107,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 93,
              "end": 103,
              "decorators": [],
              "name": "MyEnumType",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 104,
              "end": 107,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 109,
      "end": 164,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 113,
          "end": 163,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 113,
            "end": 114,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 117,
            "end": 163,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 126,
                "end": 162,
                "async": false,
                "body": {
                  "type": "BinaryExpression",
                  "start": 131,
                  "end": 162,
                  "operator": "===",
                  "left": {
                    "type": "MemberExpression",
                    "start": 131,
                    "end": 148,
                    "computed": true,
                    "object": {
                      "type": "Identifier",
                      "start": 131,
                      "end": 141,
                      "decorators": [],
                      "name": "MyEnumType",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "property": {
                      "type": "MemberExpression",
                      "start": 142,
                      "end": 147,
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "start": 142,
                        "end": 143,
                        "decorators": [],
                        "name": "o",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 144,
                        "end": 147,
                        "decorators": [],
                        "name": "key",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 153,
                    "end": 162,
                    "decorators": [],
                    "name": "enumValue",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "expression": true,
                "generator": false,
                "id": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 126,
                    "end": 127,
                    "decorators": [],
                    "name": "o",
                    "optional": false,
                    "typeAnnotation": null
                  }
                ],
                "returnType": null,
                "typeParameters": null
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 117,
              "end": 125,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 117,
                "end": 121,
                "decorators": [],
                "name": "_arr",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 122,
                "end": 125,
                "decorators": [],
                "name": "map",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
