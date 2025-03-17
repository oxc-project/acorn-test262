__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 145,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 42,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 9,
        "name": "m1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 10,
        "end": 42,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 12,
            "end": 41,
            "declaration": {
              "type": "ClassDeclaration",
              "start": 19,
              "end": 41,
              "id": {
                "type": "Identifier",
                "start": 25,
                "end": 27,
                "name": "c1",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "superClass": null,
              "body": {
                "type": "ClassBody",
                "start": 28,
                "end": 41,
                "body": [
                  {
                    "type": "PropertyDefinition",
                    "start": 30,
                    "end": 39,
                    "static": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 37,
                      "end": 38,
                      "name": "a",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": null,
                    "decorators": [],
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "typeAnnotation": null,
                    "accessibility": "public"
                  }
                ]
              },
              "decorators": [],
              "typeParameters": null,
              "implements": [],
              "abstract": false,
              "declare": false,
              "superTypeArguments": null
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
          }
        ]
      },
      "kind": "module",
      "declare": false,
      "global": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 43,
      "end": 76,
      "id": {
        "type": "Identifier",
        "start": 52,
        "end": 55,
        "name": "foo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 56,
          "end": 63,
          "name": "a",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 57,
            "end": 63,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 58,
              "end": 63,
              "typeName": {
                "type": "TSQualifiedName",
                "start": 58,
                "end": 63,
                "left": {
                  "type": "Identifier",
                  "start": 58,
                  "end": 60,
                  "name": "m1",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "right": {
                  "type": "Identifier",
                  "start": 61,
                  "end": 63,
                  "name": "c1",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              },
              "typeArguments": null
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 64,
        "end": 76,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 66,
            "end": 74,
            "expression": {
              "type": "AssignmentExpression",
              "start": 66,
              "end": 73,
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "start": 66,
                "end": 69,
                "object": {
                  "type": "Identifier",
                  "start": 66,
                  "end": 67,
                  "name": "a",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 68,
                  "end": 69,
                  "name": "a",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "right": {
                "type": "Literal",
                "start": 72,
                "end": 73,
                "value": 1,
                "raw": "1"
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
    {
      "type": "EmptyStatement",
      "start": 76,
      "end": 77
    },
    {
      "type": "VariableDeclaration",
      "start": 79,
      "end": 101,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 83,
          "end": 100,
          "id": {
            "type": "Identifier",
            "start": 83,
            "end": 86,
            "name": "myC",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 89,
            "end": 100,
            "callee": {
              "type": "MemberExpression",
              "start": 93,
              "end": 98,
              "object": {
                "type": "Identifier",
                "start": 93,
                "end": 95,
                "name": "m1",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 96,
                "end": 98,
                "name": "c1",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [],
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 103,
      "end": 112,
      "expression": {
        "type": "CallExpression",
        "start": 103,
        "end": 111,
        "callee": {
          "type": "Identifier",
          "start": 103,
          "end": 106,
          "name": "foo",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "Identifier",
            "start": 107,
            "end": 110,
            "name": "myC",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 114,
      "end": 128,
      "expression": {
        "type": "CallExpression",
        "start": 114,
        "end": 127,
        "callee": {
          "type": "Identifier",
          "start": 114,
          "end": 117,
          "name": "foo",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "Identifier",
            "start": 118,
            "end": 121,
            "name": "myC",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          {
            "type": "Identifier",
            "start": 123,
            "end": 126,
            "name": "myC",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 130,
      "end": 137,
      "expression": {
        "type": "CallExpression",
        "start": 130,
        "end": 136,
        "callee": {
          "type": "Identifier",
          "start": 130,
          "end": 133,
          "name": "foo",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "Literal",
            "start": 134,
            "end": 135,
            "value": 4,
            "raw": "4"
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 138,
      "end": 144,
      "expression": {
        "type": "CallExpression",
        "start": 138,
        "end": 143,
        "callee": {
          "type": "Identifier",
          "start": 138,
          "end": 141,
          "name": "foo",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
