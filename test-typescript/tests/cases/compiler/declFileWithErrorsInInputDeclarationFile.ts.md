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
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 35,
                  "end": 36,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": null
              }
            ],
            "declare": true,
            "kind": "var"
          },
          {
            "type": "TSDeclareFunction",
            "start": 42,
            "end": 63,
            "async": false,
            "body": null,
            "declare": true,
            "expression": false,
            "generator": false,
            "id": {
              "type": "Identifier",
              "start": 59,
              "end": 60,
              "decorators": [],
              "name": "f",
              "optional": false,
              "typeAnnotation": null
            },
            "params": [],
            "returnType": null,
            "typeParameters": null
          },
          {
            "type": "TSModuleDeclaration",
            "start": 69,
            "end": 89,
            "body": {
              "type": "TSModuleBlock",
              "start": 86,
              "end": 89,
              "body": []
            },
            "declare": true,
            "global": false,
            "id": {
              "type": "Identifier",
              "start": 84,
              "end": 85,
              "decorators": [],
              "name": "N",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "module"
          },
          {
            "type": "ClassDeclaration",
            "start": 95,
            "end": 114,
            "abstract": false,
            "body": {
              "type": "ClassBody",
              "start": 111,
              "end": 114,
              "body": []
            },
            "declare": true,
            "decorators": [],
            "id": {
              "type": "Identifier",
              "start": 109,
              "end": 110,
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null
            },
            "implements": [],
            "superClass": null,
            "superTypeArguments": null,
            "typeParameters": null
          }
        ]
      },
      "declare": true,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 15,
        "end": 16,
        "decorators": [],
        "name": "M",
        "optional": false,
        "typeAnnotation": null
      },
      "kind": "module"
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
  "end": 153,
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 57,
            "end": 58,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 61,
            "end": 70,
            "arguments": [],
            "callee": {
              "type": "MemberExpression",
              "start": 65,
              "end": 68,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 65,
                "end": 66,
                "decorators": [],
                "name": "M",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 67,
                "end": 68,
                "decorators": [],
                "name": "C",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
