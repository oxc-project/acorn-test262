exportStarFromEmptyModule_module1.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 33,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 32,
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "start": 7,
        "end": 32,
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "start": 15,
          "end": 32,
          "body": [
            {
              "type": "PropertyDefinition",
              "start": 21,
              "end": 30,
              "computed": false,
              "declare": false,
              "decorators": [],
              "definite": false,
              "key": {
                "type": "Identifier",
                "start": 28,
                "end": 29,
                "decorators": [],
                "name": "r",
                "optional": false
              },
              "optional": false,
              "override": false,
              "readonly": false,
              "static": true,
              "value": null
            }
          ]
        },
        "declare": false,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "start": 13,
          "end": 14,
          "decorators": [],
          "name": "A",
          "optional": false
        },
        "implements": [],
        "superClass": null
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    }
  ],
  "sourceType": "module"
}
```
exportStarFromEmptyModule_module2.ts
```json
{
  "type": "Program",
  "start": 9,
  "end": 9,
  "body": [],
  "sourceType": "module"
}
```
exportStarFromEmptyModule_module3.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 140,
  "body": [
    {
      "type": "ExportAllDeclaration",
      "start": 0,
      "end": 52,
      "attributes": [],
      "exported": null,
      "exportKind": "value",
      "source": {
        "type": "Literal",
        "start": 14,
        "end": 51,
        "raw": "\"./exportStarFromEmptyModule_module2\"",
        "value": "./exportStarFromEmptyModule_module2"
      }
    },
    {
      "type": "ExportAllDeclaration",
      "start": 53,
      "end": 105,
      "attributes": [],
      "exported": null,
      "exportKind": "value",
      "source": {
        "type": "Literal",
        "start": 67,
        "end": 104,
        "raw": "\"./exportStarFromEmptyModule_module1\"",
        "value": "./exportStarFromEmptyModule_module1"
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 107,
      "end": 139,
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "start": 114,
        "end": 139,
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "start": 122,
          "end": 139,
          "body": [
            {
              "type": "PropertyDefinition",
              "start": 128,
              "end": 137,
              "computed": false,
              "declare": false,
              "decorators": [],
              "definite": false,
              "key": {
                "type": "Identifier",
                "start": 135,
                "end": 136,
                "decorators": [],
                "name": "q",
                "optional": false
              },
              "optional": false,
              "override": false,
              "readonly": false,
              "static": true,
              "value": null
            }
          ]
        },
        "declare": false,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "start": 120,
          "end": 121,
          "decorators": [],
          "name": "A",
          "optional": false
        },
        "implements": [],
        "superClass": null
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    }
  ],
  "sourceType": "module"
}
```
exportStarFromEmptyModule_module4.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 92,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 57,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 19,
        "end": 56,
        "raw": "\"./exportStarFromEmptyModule_module3\"",
        "value": "./exportStarFromEmptyModule_module3"
      },
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "start": 7,
          "end": 13,
          "local": {
            "type": "Identifier",
            "start": 12,
            "end": 13,
            "decorators": [],
            "name": "X",
            "optional": false
          }
        }
      ]
    },
    {
      "type": "VariableDeclaration",
      "start": 58,
      "end": 69,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 62,
          "end": 68,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 62,
            "end": 68,
            "decorators": [],
            "name": "s",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 63,
              "end": 68,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 65,
                "end": 68,
                "typeName": {
                  "type": "TSQualifiedName",
                  "start": 65,
                  "end": 68,
                  "left": {
                    "type": "Identifier",
                    "start": 65,
                    "end": 66,
                    "decorators": [],
                    "name": "X",
                    "optional": false
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 67,
                    "end": 68,
                    "decorators": [],
                    "name": "A",
                    "optional": false
                  }
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 70,
      "end": 76,
      "expression": {
        "type": "MemberExpression",
        "start": 70,
        "end": 75,
        "computed": false,
        "object": {
          "type": "MemberExpression",
          "start": 70,
          "end": 73,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 70,
            "end": 71,
            "decorators": [],
            "name": "X",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 72,
            "end": 73,
            "decorators": [],
            "name": "A",
            "optional": false
          }
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 74,
          "end": 75,
          "decorators": [],
          "name": "q",
          "optional": false
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 77,
      "end": 83,
      "expression": {
        "type": "MemberExpression",
        "start": 77,
        "end": 82,
        "computed": false,
        "object": {
          "type": "MemberExpression",
          "start": 77,
          "end": 80,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 77,
            "end": 78,
            "decorators": [],
            "name": "X",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 79,
            "end": 80,
            "decorators": [],
            "name": "A",
            "optional": false
          }
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 81,
          "end": 82,
          "decorators": [],
          "name": "r",
          "optional": false
        }
      }
    }
  ],
  "sourceType": "module"
}
```
