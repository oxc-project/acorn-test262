__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 19,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 18,
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "start": 7,
        "end": 18,
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "start": 15,
          "end": 18,
          "body": []
        },
        "declare": false,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "start": 13,
          "end": 14,
          "decorators": [],
          "name": "C",
          "optional": false,
          "typeAnnotation": null
        },
        "implements": [],
        "superClass": null,
        "superTypeArguments": null,
        "typeParameters": null
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
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
  "end": 24,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 11,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 11,
        "body": []
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 7,
        "decorators": [],
        "name": "D",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "TSExportAssignment",
      "start": 12,
      "end": 23,
      "expression": {
        "type": "Identifier",
        "start": 21,
        "end": 22,
        "decorators": [],
        "name": "D",
        "optional": false,
        "typeAnnotation": null
      }
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
  "end": 192,
  "body": [
    {
      "type": "TSImportEqualsDeclaration",
      "start": 0,
      "end": 57,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 10,
        "decorators": [],
        "name": "ext",
        "optional": false,
        "typeAnnotation": null
      },
      "importKind": "value",
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 13,
        "end": 56,
        "expression": {
          "type": "Literal",
          "start": 21,
          "end": 55,
          "raw": "'./typeofExternalModules_external'",
          "value": "./typeofExternalModules_external",
          "regex": null,
          "bigint": null
        }
      }
    },
    {
      "type": "TSImportEqualsDeclaration",
      "start": 58,
      "end": 119,
      "id": {
        "type": "Identifier",
        "start": 65,
        "end": 68,
        "decorators": [],
        "name": "exp",
        "optional": false,
        "typeAnnotation": null
      },
      "importKind": "value",
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 71,
        "end": 118,
        "expression": {
          "type": "Literal",
          "start": 79,
          "end": 117,
          "raw": "'./typeofExternalModules_exportAssign'",
          "value": "./typeofExternalModules_exportAssign",
          "regex": null,
          "bigint": null
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 121,
      "end": 146,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 125,
          "end": 145,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 125,
            "end": 139,
            "decorators": [],
            "name": "y1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 127,
              "end": 139,
              "typeAnnotation": {
                "type": "TSTypeQuery",
                "start": 129,
                "end": 139,
                "exprName": {
                  "type": "Identifier",
                  "start": 136,
                  "end": 139,
                  "decorators": [],
                  "name": "ext",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          },
          "init": {
            "type": "Identifier",
            "start": 142,
            "end": 145,
            "decorators": [],
            "name": "ext",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 147,
      "end": 156,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 147,
        "end": 155,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 147,
          "end": 149,
          "decorators": [],
          "name": "y1",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 152,
          "end": 155,
          "decorators": [],
          "name": "exp",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 157,
      "end": 182,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 161,
          "end": 181,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 161,
            "end": 175,
            "decorators": [],
            "name": "y2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 163,
              "end": 175,
              "typeAnnotation": {
                "type": "TSTypeQuery",
                "start": 165,
                "end": 175,
                "exprName": {
                  "type": "Identifier",
                  "start": 172,
                  "end": 175,
                  "decorators": [],
                  "name": "exp",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          },
          "init": {
            "type": "Identifier",
            "start": 178,
            "end": 181,
            "decorators": [],
            "name": "exp",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 183,
      "end": 192,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 183,
        "end": 191,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 183,
          "end": 185,
          "decorators": [],
          "name": "y2",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 188,
          "end": 191,
          "decorators": [],
          "name": "ext",
          "optional": false,
          "typeAnnotation": null
        }
      }
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
