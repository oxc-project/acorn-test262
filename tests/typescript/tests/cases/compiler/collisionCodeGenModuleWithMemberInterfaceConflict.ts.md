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
        "start": 10,
        "end": 12
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "m1",
                "optional": false,
                "typeAnnotation": null,
                "start": 36,
                "end": 38
              },
              "typeParameters": null,
              "extends": [],
              "body": {
                "type": "TSInterfaceBody",
                "body": [],
                "start": 39,
                "end": 46
              },
              "declare": false,
              "start": 26,
              "end": 46
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 19,
            "end": 46
          },
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
                "start": 64,
                "end": 66
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
                    "name": "m1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 78,
                    "end": 80
                  },
                  "typeArguments": null,
                  "start": 78,
                  "end": 80
                }
              ],
              "body": {
                "type": "ClassBody",
                "body": [],
                "start": 81,
                "end": 88
              },
              "abstract": false,
              "declare": false,
              "start": 58,
              "end": 88
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 51,
            "end": 88
          }
        ],
        "start": 13,
        "end": 90
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 0,
      "end": 90
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
            "start": 95,
            "end": 98
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
                "start": 105,
                "end": 107
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "m2",
                "optional": false,
                "typeAnnotation": null,
                "start": 108,
                "end": 110
              },
              "optional": false,
              "computed": false,
              "start": 105,
              "end": 110
            },
            "typeArguments": null,
            "arguments": [],
            "start": 101,
            "end": 112
          },
          "definite": false,
          "start": 95,
          "end": 112
        }
      ],
      "declare": false,
      "start": 91,
      "end": 113
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 113
}
```
