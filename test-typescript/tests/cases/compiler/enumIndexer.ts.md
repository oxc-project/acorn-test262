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
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 15,
        "name": "MyEnumType",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "members": [
        {
          "type": "TSEnumMember",
          "start": 22,
          "end": 25,
          "id": {
            "type": "Identifier",
            "start": 22,
            "end": 25,
            "name": "foo",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "initializer": null,
          "computed": false
        },
        {
          "type": "TSEnumMember",
          "start": 27,
          "end": 30,
          "id": {
            "type": "Identifier",
            "start": 27,
            "end": 30,
            "name": "bar",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "initializer": null,
          "computed": false
        }
      ],
      "const": false,
      "declare": false,
      "body": {
        "type": "TSEnumBody",
        "start": 16,
        "end": 32,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 22,
            "end": 25,
            "id": {
              "type": "Identifier",
              "start": 22,
              "end": 25,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "initializer": null,
            "computed": false
          },
          {
            "type": "TSEnumMember",
            "start": 27,
            "end": 30,
            "id": {
              "type": "Identifier",
              "start": 27,
              "end": 30,
              "name": "bar",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "initializer": null,
            "computed": false
          }
        ]
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
          "id": {
            "type": "Identifier",
            "start": 37,
            "end": 41,
            "name": "_arr",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 47,
                      "end": 50,
                      "name": "key",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "Literal",
                      "start": 52,
                      "end": 57,
                      "value": "foo",
                      "raw": "'foo'"
                    },
                    "kind": "init",
                    "optional": false
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
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 63,
                      "end": 66,
                      "name": "key",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "Literal",
                      "start": 68,
                      "end": 73,
                      "value": "bar",
                      "raw": "'bar'"
                    },
                    "kind": "init",
                    "optional": false
                  }
                ]
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 81,
            "end": 90,
            "name": "enumValue",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 93,
            "end": 107,
            "object": {
              "type": "Identifier",
              "start": 93,
              "end": 103,
              "name": "MyEnumType",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 104,
              "end": 107,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 113,
            "end": 114,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 117,
            "end": 163,
            "callee": {
              "type": "MemberExpression",
              "start": 117,
              "end": 125,
              "object": {
                "type": "Identifier",
                "start": 117,
                "end": 121,
                "name": "_arr",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 122,
                "end": 125,
                "name": "map",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 126,
                "end": 162,
                "id": null,
                "expression": true,
                "generator": false,
                "async": false,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 126,
                    "end": 127,
                    "name": "o",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                ],
                "body": {
                  "type": "BinaryExpression",
                  "start": 131,
                  "end": 162,
                  "left": {
                    "type": "MemberExpression",
                    "start": 131,
                    "end": 148,
                    "object": {
                      "type": "Identifier",
                      "start": 131,
                      "end": 141,
                      "name": "MyEnumType",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "MemberExpression",
                      "start": 142,
                      "end": 147,
                      "object": {
                        "type": "Identifier",
                        "start": 142,
                        "end": 143,
                        "name": "o",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 144,
                        "end": 147,
                        "name": "key",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
                    },
                    "computed": true,
                    "optional": false
                  },
                  "operator": "===",
                  "right": {
                    "type": "Identifier",
                    "start": 153,
                    "end": 162,
                    "name": "enumValue",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                },
                "typeParameters": null,
                "returnType": null
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
