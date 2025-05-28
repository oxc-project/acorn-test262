__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 191,
  "body": [
    {
      "type": "TSEnumDeclaration",
      "start": 0,
      "end": 32,
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 15,
        "decorators": [],
        "name": "MyEnumType",
        "optional": false,
        "typeAnnotation": null
      },
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
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
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
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": null,
            "computed": false
          }
        ]
      },
      "const": false,
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 33,
      "end": 76,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 37,
          "end": 76,
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
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "start": 47,
                      "end": 50,
                      "decorators": [],
                      "name": "key",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "Literal",
                      "start": 52,
                      "end": 57,
                      "value": "foo",
                      "raw": "'foo'"
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
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
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "start": 63,
                      "end": 66,
                      "decorators": [],
                      "name": "key",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "Literal",
                      "start": 68,
                      "end": 73,
                      "value": "bar",
                      "raw": "'bar'"
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false
                  }
                ]
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 77,
      "end": 108,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 81,
          "end": 107,
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
            "object": {
              "type": "Identifier",
              "start": 93,
              "end": 103,
              "decorators": [],
              "name": "MyEnumType",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 104,
              "end": 107,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 109,
      "end": 164,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 113,
          "end": 163,
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
            "callee": {
              "type": "MemberExpression",
              "start": 117,
              "end": 125,
              "object": {
                "type": "Identifier",
                "start": 117,
                "end": 121,
                "decorators": [],
                "name": "_arr",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 122,
                "end": 125,
                "decorators": [],
                "name": "map",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 126,
                "end": 162,
                "expression": true,
                "async": false,
                "typeParameters": null,
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
                      "decorators": [],
                      "name": "MyEnumType",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "property": {
                      "type": "MemberExpression",
                      "start": 142,
                      "end": 147,
                      "object": {
                        "type": "Identifier",
                        "start": 142,
                        "end": 143,
                        "decorators": [],
                        "name": "o",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 144,
                        "end": 147,
                        "decorators": [],
                        "name": "key",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    },
                    "optional": false,
                    "computed": true
                  },
                  "operator": "===",
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
                "id": null,
                "generator": false
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
