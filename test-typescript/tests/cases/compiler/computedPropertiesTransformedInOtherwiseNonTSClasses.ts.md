__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 108,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 107,
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 12,
        "name": "NS",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 33,
                  "end": 45,
                  "id": {
                    "type": "Identifier",
                    "start": 33,
                    "end": 34,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "init": {
                    "type": "CallExpression",
                    "start": 37,
                    "end": 45,
                    "callee": {
                      "type": "Identifier",
                      "start": 37,
                      "end": 43,
                      "name": "Symbol",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "arguments": [],
                    "optional": false,
                    "typeArguments": null
                  },
                  "definite": false
                }
              ],
              "kind": "const",
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
          },
          {
            "type": "ClassDeclaration",
            "start": 52,
            "end": 105,
            "id": {
              "type": "Identifier",
              "start": 58,
              "end": 72,
              "name": "NotTransformed",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "superClass": null,
            "body": {
              "type": "ClassBody",
              "start": 73,
              "end": 105,
              "body": [
                {
                  "type": "PropertyDefinition",
                  "start": 84,
                  "end": 99,
                  "static": false,
                  "computed": true,
                  "key": {
                    "type": "MemberExpression",
                    "start": 85,
                    "end": 89,
                    "object": {
                      "type": "Identifier",
                      "start": 85,
                      "end": 87,
                      "name": "NS",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 88,
                      "end": 89,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false
                  },
                  "value": null,
                  "decorators": [],
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
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
