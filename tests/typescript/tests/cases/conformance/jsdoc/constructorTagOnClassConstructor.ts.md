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
      "declaration": {
        "type": "ClassDeclaration",
        "start": 7,
        "end": 22,
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
        "typeParameters": null,
        "superClass": null,
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "start": 19,
          "end": 22,
          "body": []
        },
        "abstract": false,
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 23,
      "end": 96,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 30,
        "end": 96,
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
        "typeParameters": null,
        "superClass": null,
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "start": 41,
          "end": 96,
          "body": [
            {
              "type": "MethodDefinition",
              "start": 75,
              "end": 94,
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
              "value": {
                "type": "FunctionExpression",
                "start": 86,
                "end": 94,
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "start": 89,
                  "end": 94,
                  "body": []
                },
                "expression": false
              },
              "kind": "constructor",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null
            }
          ]
        },
        "abstract": false,
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "VariableDeclaration",
      "start": 98,
      "end": 124,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 104,
          "end": 123,
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
          },
          "definite": false
        }
      ],
      "declare": false
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
