missingReturnStatement.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 89,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 88,
      "body": {
        "type": "TSModuleBlock",
        "start": 12,
        "end": 88,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 18,
            "end": 82,
            "attributes": [],
            "declaration": {
              "type": "ClassDeclaration",
              "start": 25,
              "end": 82,
              "abstract": false,
              "body": {
                "type": "ClassBody",
                "start": 35,
                "end": 82,
                "body": [
                  {
                    "type": "MethodDefinition",
                    "start": 45,
                    "end": 76,
                    "accessibility": "public",
                    "computed": false,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 52,
                      "end": 55,
                      "decorators": [],
                      "name": "foo",
                      "optional": false
                    },
                    "kind": "method",
                    "optional": false,
                    "override": false,
                    "static": false,
                    "value": {
                      "type": "FunctionExpression",
                      "start": 55,
                      "end": 76,
                      "async": false,
                      "body": {
                        "type": "BlockStatement",
                        "start": 65,
                        "end": 76,
                        "body": []
                      },
                      "declare": false,
                      "expression": false,
                      "generator": false,
                      "id": null,
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
                      }
                    }
                  }
                ]
              },
              "declare": false,
              "decorators": [],
              "id": {
                "type": "Identifier",
                "start": 31,
                "end": 34,
                "decorators": [],
                "name": "Bug",
                "optional": false
              },
              "implements": [],
              "superClass": null
            },
            "exportKind": "value",
            "source": null,
            "specifiers": []
          }
        ]
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 11,
        "decorators": [],
        "name": "Test",
        "optional": false
      },
      "kind": "module"
    }
  ],
  "sourceType": "script"
}
```
