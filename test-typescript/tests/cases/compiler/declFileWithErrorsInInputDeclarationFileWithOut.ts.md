__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 117,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 116,
      "id": {
        "type": "Identifier",
        "start": 15,
        "end": 16,
        "name": "M",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 17,
        "end": 116,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 23,
            "end": 37,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 35,
                "end": 36,
                "id": {
                  "type": "Identifier",
                  "start": 35,
                  "end": 36,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": null,
                "definite": false
              }
            ],
            "kind": "var",
            "declare": true
          },
          {
            "type": "TSDeclareFunction",
            "start": 42,
            "end": 63,
            "id": {
              "type": "Identifier",
              "start": 59,
              "end": 60,
              "name": "f",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "expression": false,
            "generator": false,
            "async": false,
            "params": [],
            "body": null,
            "declare": true,
            "typeParameters": null,
            "returnType": null
          },
          {
            "type": "TSModuleDeclaration",
            "start": 69,
            "end": 89,
            "id": {
              "type": "Identifier",
              "start": 84,
              "end": 85,
              "name": "N",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "body": {
              "type": "TSModuleBlock",
              "start": 86,
              "end": 89,
              "body": []
            },
            "kind": "module",
            "declare": true,
            "global": false
          },
          {
            "type": "ClassDeclaration",
            "start": 95,
            "end": 114,
            "id": {
              "type": "Identifier",
              "start": 109,
              "end": 110,
              "name": "C",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "superClass": null,
            "body": {
              "type": "ClassBody",
              "start": 111,
              "end": 114,
              "body": []
            },
            "decorators": [],
            "typeParameters": null,
            "implements": [],
            "abstract": false,
            "declare": true,
            "superTypeArguments": null
          }
        ]
      },
      "kind": "module",
      "declare": true,
      "global": false
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 53,
  "end": 154,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 53,
      "end": 71,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 57,
          "end": 70,
          "id": {
            "type": "Identifier",
            "start": 57,
            "end": 58,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 61,
            "end": 70,
            "callee": {
              "type": "MemberExpression",
              "start": 65,
              "end": 68,
              "object": {
                "type": "Identifier",
                "start": 65,
                "end": 66,
                "name": "M",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 67,
                "end": 68,
                "name": "C",
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
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
