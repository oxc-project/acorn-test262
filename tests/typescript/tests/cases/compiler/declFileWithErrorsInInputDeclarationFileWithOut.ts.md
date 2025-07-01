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
        "start": 15,
        "end": 16
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
                  "start": 35,
                  "end": 36
                },
                "init": null,
                "definite": false,
                "start": 35,
                "end": 36
              }
            ],
            "declare": true,
            "start": 23,
            "end": 37
          },
          {
            "type": "TSDeclareFunction",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "f",
              "optional": false,
              "typeAnnotation": null,
              "start": 59,
              "end": 60
            },
            "generator": false,
            "async": false,
            "declare": true,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": null,
            "expression": false,
            "start": 42,
            "end": 63
          },
          {
            "type": "TSModuleDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "N",
              "optional": false,
              "typeAnnotation": null,
              "start": 84,
              "end": 85
            },
            "body": {
              "type": "TSModuleBlock",
              "body": [],
              "start": 86,
              "end": 89
            },
            "kind": "module",
            "declare": true,
            "global": false,
            "start": 69,
            "end": 89
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
              "start": 109,
              "end": 110
            },
            "typeParameters": null,
            "superClass": null,
            "superTypeArguments": null,
            "implements": [],
            "body": {
              "type": "ClassBody",
              "body": [],
              "start": 111,
              "end": 114
            },
            "abstract": false,
            "declare": true,
            "start": 95,
            "end": 114
          }
        ],
        "start": 17,
        "end": 116
      },
      "kind": "module",
      "declare": true,
      "global": false,
      "start": 0,
      "end": 116
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 117
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
