__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 120,
  "body": [
    {
      "type": "TSDeclareFunction",
      "start": 0,
      "end": 42,
      "id": {
        "type": "Identifier",
        "start": 17,
        "end": 20,
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "RestElement",
          "start": 21,
          "end": 35,
          "decorators": [],
          "argument": {
            "type": "Identifier",
            "start": 24,
            "end": 28,
            "decorators": [],
            "name": "args",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 28,
            "end": 35,
            "typeAnnotation": {
              "type": "TSArrayType",
              "start": 30,
              "end": 35,
              "elementType": {
                "type": "TSAnyKeyword",
                "start": 30,
                "end": 33
              }
            }
          },
          "value": null
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 36,
        "end": 41,
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 38,
          "end": 41
        }
      },
      "body": null,
      "expression": false
    },
    {
      "type": "ExportDefaultDeclaration",
      "start": 48,
      "end": 120,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 63,
        "end": 120,
        "decorators": [
          {
            "type": "Decorator",
            "start": 43,
            "end": 47,
            "expression": {
              "type": "Identifier",
              "start": 44,
              "end": 47,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ],
        "id": {
          "type": "Identifier",
          "start": 69,
          "end": 70,
          "decorators": [],
          "name": "D",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": null,
        "superClass": null,
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "start": 71,
          "end": 120,
          "body": [
            {
              "type": "PropertyDefinition",
              "start": 77,
              "end": 90,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 84,
                "end": 85,
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": null
              },
              "typeAnnotation": null,
              "value": {
                "type": "Literal",
                "start": 88,
                "end": 89,
                "value": 0,
                "raw": "0"
              },
              "computed": false,
              "static": true,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": null
            },
            {
              "type": "PropertyDefinition",
              "start": 95,
              "end": 101,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 95,
                "end": 96,
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null
              },
              "typeAnnotation": null,
              "value": {
                "type": "Literal",
                "start": 99,
                "end": 100,
                "value": 1,
                "raw": "1"
              },
              "computed": false,
              "static": false,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": null
            },
            {
              "type": "MethodDefinition",
              "start": 106,
              "end": 118,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 106,
                "end": 112,
                "decorators": [],
                "name": "method",
                "optional": false,
                "typeAnnotation": null
              },
              "value": {
                "type": "FunctionExpression",
                "start": 112,
                "end": 118,
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "start": 115,
                  "end": 118,
                  "body": []
                },
                "expression": false
              },
              "kind": "method",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null
            }
          ]
        },
        "abstract": false,
        "declare": false
      },
      "exportKind": "value"
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
