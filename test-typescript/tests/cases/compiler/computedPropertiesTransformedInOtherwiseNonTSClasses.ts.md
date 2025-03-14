computedPropertiesTransformedInOtherwiseNonTSClasses.ts
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
      "body": {
        "type": "TSModuleBlock",
        "start": 13,
        "end": 107,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 20,
            "end": 46,
            "attributes": [],
            "declaration": {
              "type": "VariableDeclaration",
              "start": 27,
              "end": 46,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 33,
                  "end": 45,
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 33,
                    "end": 34,
                    "decorators": [],
                    "name": "x",
                    "optional": false
                  },
                  "init": {
                    "type": "CallExpression",
                    "start": 37,
                    "end": 45,
                    "arguments": [],
                    "callee": {
                      "type": "Identifier",
                      "start": 37,
                      "end": 43,
                      "decorators": [],
                      "name": "Symbol",
                      "optional": false
                    },
                    "optional": false
                  }
                }
              ],
              "declare": false,
              "kind": "const"
            },
            "exportKind": "value",
            "source": null,
            "specifiers": []
          },
          {
            "type": "ClassDeclaration",
            "start": 52,
            "end": 105,
            "abstract": false,
            "body": {
              "type": "ClassBody",
              "start": 73,
              "end": 105,
              "body": [
                {
                  "type": "PropertyDefinition",
                  "start": 84,
                  "end": 99,
                  "computed": true,
                  "declare": false,
                  "decorators": [],
                  "definite": false,
                  "key": {
                    "type": "MemberExpression",
                    "start": 85,
                    "end": 89,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 85,
                      "end": 87,
                      "decorators": [],
                      "name": "NS",
                      "optional": false
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 88,
                      "end": 89,
                      "decorators": [],
                      "name": "x",
                      "optional": false
                    }
                  },
                  "optional": false,
                  "override": false,
                  "readonly": false,
                  "static": false,
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
                  "value": null
                }
              ]
            },
            "declare": false,
            "decorators": [],
            "id": {
              "type": "Identifier",
              "start": 58,
              "end": 72,
              "decorators": [],
              "name": "NotTransformed",
              "optional": false
            },
            "implements": [],
            "superClass": null
          }
        ]
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 12,
        "decorators": [],
        "name": "NS",
        "optional": false
      },
      "kind": "namespace"
    }
  ],
  "sourceType": "script"
}
```
