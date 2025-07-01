__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null,
        "start": 6,
        "end": 7
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 10,
              "end": 13
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 15,
                "end": 21
              },
              "start": 13,
              "end": 21
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 10,
            "end": 22
          }
        ],
        "start": 8,
        "end": 24
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 24
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
                  "name": "C",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 33,
                  "end": 34
                },
                "typeArguments": null,
                "start": 33,
                "end": 34
              },
              "start": 31,
              "end": 34
            },
            "start": 30,
            "end": 34
          },
          "init": null,
          "definite": false,
          "start": 30,
          "end": 34
        }
      ],
      "declare": false,
      "start": 26,
      "end": 35
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
            "name": "r",
            "optional": false,
            "typeAnnotation": null,
            "start": 40,
            "end": 41
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null,
                "start": 44,
                "end": 45
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "toString",
                "optional": false,
                "typeAnnotation": null,
                "start": 46,
                "end": 54
              },
              "optional": false,
              "computed": false,
              "start": 44,
              "end": 54
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 44,
            "end": 56
          },
          "definite": false,
          "start": 40,
          "end": 56
        }
      ],
      "declare": false,
      "start": 36,
      "end": 57
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
            "name": "r2",
            "optional": false,
            "typeAnnotation": null,
            "start": 62,
            "end": 64
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null,
                "start": 67,
                "end": 68
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "hasOwnProperty",
                "optional": false,
                "typeAnnotation": null,
                "start": 69,
                "end": 83
              },
              "optional": false,
              "computed": false,
              "start": 67,
              "end": 83
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": "",
                "raw": "''",
                "start": 84,
                "end": 86
              }
            ],
            "optional": false,
            "start": 67,
            "end": 87
          },
          "definite": false,
          "start": 62,
          "end": 87
        }
      ],
      "declare": false,
      "start": 58,
      "end": 88
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
            "name": "o",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Object",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 96,
                  "end": 102
                },
                "typeArguments": null,
                "start": 96,
                "end": 102
              },
              "start": 94,
              "end": 102
            },
            "start": 93,
            "end": 102
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null,
            "start": 105,
            "end": 106
          },
          "definite": false,
          "start": 93,
          "end": 106
        }
      ],
      "declare": false,
      "start": 89,
      "end": 107
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
            "name": "o2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [],
                "start": 116,
                "end": 118
              },
              "start": 114,
              "end": 118
            },
            "start": 112,
            "end": 118
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null,
            "start": 121,
            "end": 122
          },
          "definite": false,
          "start": 112,
          "end": 122
        }
      ],
      "declare": false,
      "start": 108,
      "end": 123
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 123
}
```
