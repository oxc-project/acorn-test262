__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 11
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [],
        "start": 12,
        "end": 14
      },
      "declare": false,
      "start": 0,
      "end": 14
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "AAA",
        "optional": false,
        "typeAnnotation": null,
        "start": 21,
        "end": 24
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [
        {
          "type": "TSClassImplements",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "I",
            "optional": false,
            "typeAnnotation": null,
            "start": 36,
            "end": 37
          },
          "typeArguments": null,
          "start": 36,
          "end": 37
        }
      ],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 38,
        "end": 41
      },
      "abstract": false,
      "declare": false,
      "start": 15,
      "end": 41
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 49,
                "end": 55
              },
              "start": 47,
              "end": 55
            },
            "start": 46,
            "end": 55
          },
          "init": null,
          "definite": false,
          "start": 46,
          "end": 55
        }
      ],
      "declare": false,
      "start": 42,
      "end": 56
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 57,
            "end": 58
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "toString",
            "optional": false,
            "typeAnnotation": null,
            "start": 59,
            "end": 67
          },
          "optional": false,
          "computed": false,
          "start": 57,
          "end": 67
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 57,
        "end": 69
      },
      "directive": null,
      "start": 57,
      "end": 70
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "i",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "I",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 78,
                  "end": 79
                },
                "typeArguments": null,
                "start": 78,
                "end": 79
              },
              "start": 76,
              "end": 79
            },
            "start": 75,
            "end": 79
          },
          "init": null,
          "definite": false,
          "start": 75,
          "end": 79
        }
      ],
      "declare": false,
      "start": 71,
      "end": 80
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "i",
            "optional": false,
            "typeAnnotation": null,
            "start": 81,
            "end": 82
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "toString",
            "optional": false,
            "typeAnnotation": null,
            "start": 83,
            "end": 91
          },
          "optional": false,
          "computed": false,
          "start": 81,
          "end": 91
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 81,
        "end": 93
      },
      "directive": null,
      "start": 81,
      "end": 94
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "AAA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 125,
                  "end": 128
                },
                "typeArguments": null,
                "start": 125,
                "end": 128
              },
              "start": 123,
              "end": 128
            },
            "start": 122,
            "end": 128
          },
          "init": null,
          "definite": false,
          "start": 122,
          "end": 128
        }
      ],
      "declare": false,
      "start": 118,
      "end": 129
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null,
            "start": 130,
            "end": 131
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "toString",
            "optional": false,
            "typeAnnotation": null,
            "start": 132,
            "end": 140
          },
          "optional": false,
          "computed": false,
          "start": 130,
          "end": 140
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 130,
        "end": 142
      },
      "directive": null,
      "start": 130,
      "end": 143
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 166
}
```
