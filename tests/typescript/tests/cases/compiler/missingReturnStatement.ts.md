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
        "name": "Test",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 14
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
                "name": "Bug",
                "optional": false,
                "typeAnnotation": null,
                "start": 34,
                "end": 37
              },
              "typeParameters": null,
              "superClass": null,
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "body": [
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 55,
                      "end": 58
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 61,
                          "end": 67
                        },
                        "start": 60,
                        "end": 67
                      },
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 68,
                        "end": 79
                      },
                      "expression": false,
                      "start": 58,
                      "end": 79
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "public",
                    "start": 48,
                    "end": 79
                  }
                ],
                "start": 38,
                "end": 85
              },
              "abstract": false,
              "declare": false,
              "start": 28,
              "end": 85
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 21,
            "end": 85
          }
        ],
        "start": 15,
        "end": 91
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 0,
      "end": 91
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 91
}
```
