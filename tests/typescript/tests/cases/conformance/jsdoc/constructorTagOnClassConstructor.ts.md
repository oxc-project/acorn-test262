__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 124,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 22,
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "start": 7,
        "end": 22,
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "start": 19,
          "end": 22,
          "body": []
        },
        "declare": false,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "start": 13,
          "end": 18,
          "decorators": [],
          "name": "Alpha",
          "optional": false,
          "typeAnnotation": null
        },
        "implements": [],
        "superClass": null,
        "superTypeArguments": null,
        "typeParameters": null
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 23,
      "end": 96,
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "start": 30,
        "end": 96,
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "start": 41,
          "end": 96,
          "body": [
            {
              "type": "MethodDefinition",
              "start": 75,
              "end": 94,
              "accessibility": null,
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 75,
                "end": 86,
                "decorators": [],
                "name": "constructor",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "constructor",
              "optional": false,
              "override": false,
              "static": false,
              "value": {
                "type": "FunctionExpression",
                "start": 86,
                "end": 94,
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "start": 89,
                  "end": 94,
                  "body": []
                },
                "declare": false,
                "expression": false,
                "generator": false,
                "id": null,
                "params": [],
                "returnType": null,
                "typeParameters": null
              }
            }
          ]
        },
        "declare": false,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "start": 36,
          "end": 40,
          "decorators": [],
          "name": "Beta",
          "optional": false,
          "typeAnnotation": null
        },
        "implements": [],
        "superClass": null,
        "superTypeArguments": null,
        "typeParameters": null
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "VariableDeclaration",
      "start": 98,
      "end": 124,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 104,
          "end": 123,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 104,
            "end": 107,
            "decorators": [],
            "name": "arr",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrayExpression",
            "start": 110,
            "end": 123,
            "elements": [
              {
                "type": "Identifier",
                "start": 111,
                "end": 116,
                "decorators": [],
                "name": "Alpha",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 118,
                "end": 122,
                "decorators": [],
                "name": "Beta",
                "optional": false,
                "typeAnnotation": null
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "const"
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
