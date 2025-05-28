__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 273,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 209,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 7,
        "decorators": [],
        "name": "X",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 209,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 14,
            "end": 52,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 21,
              "end": 42,
              "decorators": [],
              "name": "illegalBeforeProperty",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": null,
            "value": {
              "type": "MemberExpression",
              "start": 45,
              "end": 51,
              "object": {
                "type": "Identifier",
                "start": 45,
                "end": 46,
                "decorators": [],
                "name": "X",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 47,
                "end": 51,
                "decorators": [],
                "name": "data",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
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
            "start": 57,
            "end": 90,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 64,
              "end": 78,
              "decorators": [],
              "name": "okBeforeMethod",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": null,
            "value": {
              "type": "MemberExpression",
              "start": 81,
              "end": 89,
              "object": {
                "type": "Identifier",
                "start": 81,
                "end": 82,
                "decorators": [],
                "name": "X",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 83,
                "end": 89,
                "decorators": [],
                "name": "method",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
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
            "start": 96,
            "end": 125,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 103,
              "end": 111,
              "decorators": [],
              "name": "illegal2",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": null,
            "value": {
              "type": "MemberExpression",
              "start": 114,
              "end": 124,
              "object": {
                "type": "Identifier",
                "start": 114,
                "end": 119,
                "decorators": [],
                "name": "After",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 120,
                "end": 124,
                "decorators": [],
                "name": "data",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
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
            "start": 130,
            "end": 161,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 137,
              "end": 145,
              "decorators": [],
              "name": "illegal3",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": null,
            "value": {
              "type": "MemberExpression",
              "start": 148,
              "end": 160,
              "object": {
                "type": "Identifier",
                "start": 148,
                "end": 153,
                "decorators": [],
                "name": "After",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 154,
                "end": 160,
                "decorators": [],
                "name": "method",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
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
            "start": 166,
            "end": 183,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 173,
              "end": 177,
              "decorators": [],
              "name": "data",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "start": 180,
              "end": 182,
              "value": 13,
              "raw": "13"
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
            "type": "MethodDefinition",
            "start": 188,
            "end": 207,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 195,
              "end": 201,
              "decorators": [],
              "name": "method",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 201,
              "end": 207,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 204,
                "end": 207,
                "body": []
              },
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 210,
      "end": 272,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 216,
        "end": 221,
        "decorators": [],
        "name": "After",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 222,
        "end": 272,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 228,
            "end": 245,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 235,
              "end": 239,
              "decorators": [],
              "name": "data",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "start": 242,
              "end": 244,
              "value": 12,
              "raw": "12"
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
            "type": "MethodDefinition",
            "start": 250,
            "end": 269,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 257,
              "end": 263,
              "decorators": [],
              "name": "method",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 263,
              "end": 269,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 266,
                "end": 269,
                "body": []
              },
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
