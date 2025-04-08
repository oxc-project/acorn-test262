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
      "declaration": {
        "type": "ClassDeclaration",
        "start": 7,
        "end": 18,
        "id": {
          "type": "Identifier",
          "start": 13,
          "end": 14,
          "name": "C",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "superClass": null,
        "body": {
          "type": "ClassBody",
          "start": 15,
          "end": 18,
          "body": []
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
  "end": 24,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 11,
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 7,
        "name": "D",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 11,
        "body": []
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "TSExportAssignment",
      "start": 12,
      "end": 23,
      "expression": {
        "type": "Identifier",
        "start": 21,
        "end": 22,
        "name": "D",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
        "name": "ext",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 13,
        "end": 56,
        "expression": {
          "type": "Literal",
          "start": 21,
          "end": 55,
          "value": "./typeofExternalModules_external",
          "raw": "'./typeofExternalModules_external'"
        }
      },
      "importKind": "value"
    },
    {
      "type": "TSImportEqualsDeclaration",
      "start": 58,
      "end": 119,
      "id": {
        "type": "Identifier",
        "start": 65,
        "end": 68,
        "name": "exp",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 71,
        "end": 118,
        "expression": {
          "type": "Literal",
          "start": 79,
          "end": 117,
          "value": "./typeofExternalModules_exportAssign",
          "raw": "'./typeofExternalModules_exportAssign'"
        }
      },
      "importKind": "value"
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
          "id": {
            "type": "Identifier",
            "start": 125,
            "end": 139,
            "name": "y1",
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
                  "name": "ext",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Identifier",
            "start": 142,
            "end": 145,
            "name": "ext",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 147,
      "end": 156,
      "expression": {
        "type": "AssignmentExpression",
        "start": 147,
        "end": 155,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 147,
          "end": 149,
          "name": "y1",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 152,
          "end": 155,
          "name": "exp",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
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
          "id": {
            "type": "Identifier",
            "start": 161,
            "end": 175,
            "name": "y2",
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
                  "name": "exp",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Identifier",
            "start": 178,
            "end": 181,
            "name": "exp",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 183,
      "end": 192,
      "expression": {
        "type": "AssignmentExpression",
        "start": 183,
        "end": 191,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 183,
          "end": 185,
          "name": "y2",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 188,
          "end": 191,
          "name": "ext",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
