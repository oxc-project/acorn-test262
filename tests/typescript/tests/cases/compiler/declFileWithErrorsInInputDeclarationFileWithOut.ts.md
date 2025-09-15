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
        "name": "M",
        "optional": false,
        "typeAnnotation": null,
        "start": 18,
        "end": 19
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
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
                  "typeAnnotation": null,
                  "start": 38,
                  "end": 39
                },
                "init": null,
                "definite": false,
                "start": 38,
                "end": 39
              }
            ],
            "declare": true,
            "start": 26,
            "end": 40
          },
          {
            "type": "TSDeclareFunction",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "f",
              "optional": false,
              "typeAnnotation": null,
              "start": 62,
              "end": 63
            },
            "generator": false,
            "async": false,
            "declare": true,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": null,
            "expression": false,
            "start": 45,
            "end": 66
          },
          {
            "type": "TSModuleDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "N",
              "optional": false,
              "typeAnnotation": null,
              "start": 90,
              "end": 91
            },
            "body": {
              "type": "TSModuleBlock",
              "body": [],
              "start": 92,
              "end": 95
            },
            "kind": "namespace",
            "declare": true,
            "global": false,
            "start": 72,
            "end": 95
          },
          {
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null,
              "start": 115,
              "end": 116
            },
            "typeParameters": null,
            "superClass": null,
            "superTypeArguments": null,
            "implements": [],
            "body": {
              "type": "ClassBody",
              "body": [],
              "start": 117,
              "end": 120
            },
            "abstract": false,
            "declare": true,
            "start": 101,
            "end": 120
          }
        ],
        "start": 20,
        "end": 122
      },
      "kind": "namespace",
      "declare": true,
      "global": false,
      "start": 0,
      "end": 122
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 123
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
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
            "typeAnnotation": null,
            "start": 57,
            "end": 58
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "M",
                "optional": false,
                "typeAnnotation": null,
                "start": 65,
                "end": 66
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "C",
                "optional": false,
                "typeAnnotation": null,
                "start": 67,
                "end": 68
              },
              "optional": false,
              "computed": false,
              "start": 65,
              "end": 68
            },
            "typeArguments": null,
            "arguments": [],
            "start": 61,
            "end": 70
          },
          "definite": false,
          "start": 57,
          "end": 70
        }
      ],
      "declare": false,
      "start": 53,
      "end": 71
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 53,
  "end": 153
}
```
