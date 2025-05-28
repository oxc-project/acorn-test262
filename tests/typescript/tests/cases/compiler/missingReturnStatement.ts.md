__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 88,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 88,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 11,
        "decorators": [],
        "name": "Test",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 12,
        "end": 88,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 18,
            "end": 82,
            "declaration": {
              "type": "ClassDeclaration",
              "start": 25,
              "end": 82,
              "decorators": [],
              "id": {
                "type": "Identifier",
                "start": 31,
                "end": 34,
                "decorators": [],
                "name": "Bug",
                "optional": false,
                "typeAnnotation": null
              },
              "typeParameters": null,
              "superClass": null,
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "start": 35,
                "end": 82,
                "body": [
                  {
                    "type": "MethodDefinition",
                    "start": 45,
                    "end": 76,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 52,
                      "end": 55,
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "start": 55,
                      "end": 76,
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 57,
                        "end": 64,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 58,
                          "end": 64
                        }
                      },
                      "body": {
                        "type": "BlockStatement",
                        "start": 65,
                        "end": 76,
                        "body": []
                      },
                      "expression": false
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "public"
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
          }
        ]
      },
      "kind": "module",
      "declare": false,
      "global": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
