__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 55,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 54,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 7,
        "end": 54,
        "id": {
          "type": "Identifier",
          "start": 13,
          "end": 20,
          "name": "Greeter",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "superClass": null,
        "body": {
          "type": "ClassBody",
          "start": 21,
          "end": 54,
          "body": [
            {
              "type": "MethodDefinition",
              "start": 26,
              "end": 52,
              "static": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 26,
                "end": 31,
                "name": "greet",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "kind": "method",
              "value": {
                "type": "FunctionExpression",
                "start": 31,
                "end": 52,
                "id": null,
                "expression": false,
                "generator": false,
                "async": false,
                "params": [],
                "body": {
                  "type": "BlockStatement",
                  "start": 34,
                  "end": 52,
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "start": 36,
                      "end": 50,
                      "argument": {
                        "type": "Literal",
                        "start": 43,
                        "end": 50,
                        "value": "greet",
                        "raw": "'greet'"
                      }
                    }
                  ]
                },
                "declare": false,
                "typeParameters": null,
                "returnType": null
              },
              "decorators": [],
              "override": false,
              "optional": false,
              "accessibility": null
            }
          ]
        },
        "decorators": [],
        "typeParameters": null,
        "implements": [],
        "abstract": false,
        "declare": false,
        "superTypeArguments": null
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
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
  "start": 0,
  "end": 83,
  "body": [
    {
      "type": "TSImportEqualsDeclaration",
      "start": 0,
      "end": 50,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 14,
        "name": "Greeter",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 17,
        "end": 49,
        "expression": {
          "type": "Literal",
          "start": 25,
          "end": 48,
          "value": "./importAsBaseClass_0",
          "raw": "\"./importAsBaseClass_0\""
        }
      },
      "importKind": "value"
    },
    {
      "type": "ClassDeclaration",
      "start": 51,
      "end": 82,
      "id": {
        "type": "Identifier",
        "start": 57,
        "end": 62,
        "name": "Hello",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 71,
        "end": 78,
        "name": "Greeter",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 79,
        "end": 82,
        "body": []
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
