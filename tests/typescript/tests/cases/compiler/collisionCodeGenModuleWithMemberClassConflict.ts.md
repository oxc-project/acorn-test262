__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "m1",
        "optional": false,
        "typeAnnotation": null,
        "start": 7,
        "end": 9
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "ClassDeclaration",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "m1",
                "optional": false,
                "typeAnnotation": null,
                "start": 29,
                "end": 31
              },
              "typeParameters": null,
              "superClass": null,
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "body": [],
                "start": 32,
                "end": 39
              },
              "abstract": false,
              "declare": false,
              "start": 23,
              "end": 39
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 16,
            "end": 39
          }
        ],
        "start": 10,
        "end": 41
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 0,
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
            "name": "foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 46,
            "end": 49
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "m1",
                "optional": false,
                "typeAnnotation": null,
                "start": 56,
                "end": 58
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "m1",
                "optional": false,
                "typeAnnotation": null,
                "start": 59,
                "end": 61
              },
              "optional": false,
              "computed": false,
              "start": 56,
              "end": 61
            },
            "typeArguments": null,
            "arguments": [],
            "start": 52,
            "end": 63
          },
          "definite": false,
          "start": 46,
          "end": 63
        }
      ],
      "declare": false,
      "start": 42,
      "end": 64
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "m2",
        "optional": false,
        "typeAnnotation": null,
        "start": 73,
        "end": 75
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "ClassDeclaration",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "m2",
                "optional": false,
                "typeAnnotation": null,
                "start": 95,
                "end": 97
              },
              "typeParameters": null,
              "superClass": null,
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "body": [],
                "start": 98,
                "end": 105
              },
              "abstract": false,
              "declare": false,
              "start": 89,
              "end": 105
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 82,
            "end": 105
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "ClassDeclaration",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "_m2",
                "optional": false,
                "typeAnnotation": null,
                "start": 124,
                "end": 127
              },
              "typeParameters": null,
              "superClass": null,
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "body": [],
                "start": 128,
                "end": 135
              },
              "abstract": false,
              "declare": false,
              "start": 118,
              "end": 135
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 111,
            "end": 135
          }
        ],
        "start": 76,
        "end": 137
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 66,
      "end": 137
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
            "name": "foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 142,
            "end": 145
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "m2",
                "optional": false,
                "typeAnnotation": null,
                "start": 152,
                "end": 154
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "m2",
                "optional": false,
                "typeAnnotation": null,
                "start": 155,
                "end": 157
              },
              "optional": false,
              "computed": false,
              "start": 152,
              "end": 157
            },
            "typeArguments": null,
            "arguments": [],
            "start": 148,
            "end": 159
          },
          "definite": false,
          "start": 142,
          "end": 159
        }
      ],
      "declare": false,
      "start": 138,
      "end": 160
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
            "name": "foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 165,
            "end": 168
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "m2",
                "optional": false,
                "typeAnnotation": null,
                "start": 175,
                "end": 177
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "_m2",
                "optional": false,
                "typeAnnotation": null,
                "start": 178,
                "end": 181
              },
              "optional": false,
              "computed": false,
              "start": 175,
              "end": 181
            },
            "typeArguments": null,
            "arguments": [],
            "start": 171,
            "end": 183
          },
          "definite": false,
          "start": 165,
          "end": 183
        }
      ],
      "declare": false,
      "start": 161,
      "end": 184
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 184
}
```
