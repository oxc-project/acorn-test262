__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 107,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 107,
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 12,
        "decorators": [],
        "name": "NS",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 13,
        "end": 107,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 20,
            "end": 46,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 27,
              "end": 46,
              "kind": "const",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 33,
                  "end": 45,
                  "id": {
                    "type": "Identifier",
                    "start": 33,
                    "end": 34,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": {
                    "type": "CallExpression",
                    "start": 37,
                    "end": 45,
                    "callee": {
                      "type": "Identifier",
                      "start": 37,
                      "end": 43,
                      "decorators": [],
                      "name": "Symbol",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false
                  },
                  "definite": false
                }
              ],
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": []
          },
          {
            "type": "ClassDeclaration",
            "start": 52,
            "end": 105,
            "decorators": [],
            "id": {
              "type": "Identifier",
              "start": 58,
              "end": 72,
              "decorators": [],
              "name": "NotTransformed",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": null,
            "superClass": null,
            "superTypeArguments": null,
            "implements": [],
            "body": {
              "type": "ClassBody",
              "start": 73,
              "end": 105,
              "body": [
                {
                  "type": "PropertyDefinition",
                  "start": 84,
                  "end": 99,
                  "decorators": [],
                  "key": {
                    "type": "MemberExpression",
                    "start": 85,
                    "end": 89,
                    "object": {
                      "type": "Identifier",
                      "start": 85,
                      "end": 87,
                      "decorators": [],
                      "name": "NS",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 88,
                      "end": 89,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 90,
                    "end": 98,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 92,
                      "end": 98
                    }
                  },
                  "value": null,
                  "computed": true,
                  "static": false,
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
                  "accessibility": null
                }
              ]
            },
            "abstract": false,
            "declare": false
          }
        ]
      },
      "kind": "namespace",
      "declare": false,
      "global": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
