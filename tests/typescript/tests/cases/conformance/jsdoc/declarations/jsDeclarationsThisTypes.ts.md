__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 195,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 87,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 7,
        "end": 87,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "start": 13,
          "end": 14,
          "decorators": [],
          "name": "A",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": null,
        "superClass": null,
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "start": 15,
          "end": 87,
          "body": [
            {
              "type": "MethodDefinition",
              "start": 48,
              "end": 85,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 48,
                "end": 54,
                "decorators": [],
                "name": "method",
                "optional": false,
                "typeAnnotation": null
              },
              "value": {
                "type": "FunctionExpression",
                "start": 54,
                "end": 85,
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "start": 57,
                  "end": 85,
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "start": 67,
                      "end": 79,
                      "argument": {
                        "type": "ThisExpression",
                        "start": 74,
                        "end": 78
                      }
                    }
                  ]
                },
                "expression": false
              },
              "kind": "method",
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
      "type": "ExportDefaultDeclaration",
      "start": 88,
      "end": 195,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 103,
        "end": 195,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "start": 109,
          "end": 113,
          "decorators": [],
          "name": "Base",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": null,
        "superClass": {
          "type": "Identifier",
          "start": 122,
          "end": 123,
          "decorators": [],
          "name": "A",
          "optional": false,
          "typeAnnotation": null
        },
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "start": 124,
          "end": 195,
          "body": [
            {
              "type": "MethodDefinition",
              "start": 181,
              "end": 193,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 181,
                "end": 187,
                "decorators": [],
                "name": "verify",
                "optional": false,
                "typeAnnotation": null
              },
              "value": {
                "type": "FunctionExpression",
                "start": 187,
                "end": 193,
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "start": 190,
                  "end": 193,
                  "body": []
                },
                "expression": false
              },
              "kind": "method",
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
      "exportKind": "value"
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
