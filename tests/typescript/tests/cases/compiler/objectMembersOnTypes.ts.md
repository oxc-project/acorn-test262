__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 166,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 14,
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 11,
        "decorators": [],
        "name": "I",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 12,
        "end": 14,
        "body": []
      },
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 15,
      "end": 41,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 21,
        "end": 24,
        "decorators": [],
        "name": "AAA",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [
        {
          "type": "TSClassImplements",
          "start": 36,
          "end": 37,
          "expression": {
            "type": "Identifier",
            "start": 36,
            "end": 37,
            "decorators": [],
            "name": "I",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      ],
      "body": {
        "type": "ClassBody",
        "start": 38,
        "end": 41,
        "body": []
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 42,
      "end": 56,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 46,
          "end": 55,
          "id": {
            "type": "Identifier",
            "start": 46,
            "end": 55,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 47,
              "end": 55,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 49,
                "end": 55
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 57,
      "end": 70,
      "expression": {
        "type": "CallExpression",
        "start": 57,
        "end": 69,
        "callee": {
          "type": "MemberExpression",
          "start": 57,
          "end": 67,
          "object": {
            "type": "Identifier",
            "start": 57,
            "end": 58,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 59,
            "end": 67,
            "decorators": [],
            "name": "toString",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 71,
      "end": 80,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 75,
          "end": 79,
          "id": {
            "type": "Identifier",
            "start": 75,
            "end": 79,
            "decorators": [],
            "name": "i",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 76,
              "end": 79,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 78,
                "end": 79,
                "typeName": {
                  "type": "Identifier",
                  "start": 78,
                  "end": 79,
                  "decorators": [],
                  "name": "I",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 81,
      "end": 94,
      "expression": {
        "type": "CallExpression",
        "start": 81,
        "end": 93,
        "callee": {
          "type": "MemberExpression",
          "start": 81,
          "end": 91,
          "object": {
            "type": "Identifier",
            "start": 81,
            "end": 82,
            "decorators": [],
            "name": "i",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 83,
            "end": 91,
            "decorators": [],
            "name": "toString",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 118,
      "end": 129,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 122,
          "end": 128,
          "id": {
            "type": "Identifier",
            "start": 122,
            "end": 128,
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 123,
              "end": 128,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 125,
                "end": 128,
                "typeName": {
                  "type": "Identifier",
                  "start": 125,
                  "end": 128,
                  "decorators": [],
                  "name": "AAA",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 130,
      "end": 143,
      "expression": {
        "type": "CallExpression",
        "start": 130,
        "end": 142,
        "callee": {
          "type": "MemberExpression",
          "start": 130,
          "end": 140,
          "object": {
            "type": "Identifier",
            "start": 130,
            "end": 131,
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 132,
            "end": 140,
            "decorators": [],
            "name": "toString",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
