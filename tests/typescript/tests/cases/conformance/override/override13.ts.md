__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 451,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 60,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 9,
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 10,
        "end": 60,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 16,
            "end": 28,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 16,
              "end": 24,
              "decorators": [],
              "name": "property",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "start": 27,
              "end": 28,
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
            "type": "PropertyDefinition",
            "start": 33,
            "end": 58,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 40,
              "end": 54,
              "decorators": [],
              "name": "staticProperty",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "start": 57,
              "end": 58,
              "value": 2,
              "raw": "2"
            },
            "computed": false,
            "static": true,
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
    },
    {
      "type": "ClassDeclaration",
      "start": 62,
      "end": 134,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 68,
        "end": 74,
        "decorators": [],
        "name": "SubFoo",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "start": 83,
        "end": 86,
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 87,
        "end": 134,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 93,
            "end": 107,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 93,
              "end": 101,
              "decorators": [],
              "name": "property",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "start": 104,
              "end": 106,
              "value": 42,
              "raw": "42"
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
            "type": "PropertyDefinition",
            "start": 112,
            "end": 132,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 112,
              "end": 126,
              "decorators": [],
              "name": "staticProperty",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "start": 129,
              "end": 131,
              "value": 42,
              "raw": "42"
            },
            "computed": false,
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
    },
    {
      "type": "ClassDeclaration",
      "start": 136,
      "end": 228,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 142,
        "end": 154,
        "decorators": [],
        "name": "StaticSubFoo",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "start": 163,
        "end": 166,
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 167,
        "end": 228,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 173,
            "end": 194,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 180,
              "end": 188,
              "decorators": [],
              "name": "property",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "start": 191,
              "end": 193,
              "value": 42,
              "raw": "42"
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
            "start": 199,
            "end": 226,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 206,
              "end": 220,
              "decorators": [],
              "name": "staticProperty",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "start": 223,
              "end": 225,
              "value": 42,
              "raw": "42"
            },
            "computed": false,
            "static": true,
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
    },
    {
      "type": "ClassDeclaration",
      "start": 230,
      "end": 263,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 236,
        "end": 248,
        "decorators": [],
        "name": "Intermediate",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "start": 257,
        "end": 260,
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 261,
        "end": 263,
        "body": []
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 265,
      "end": 347,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 271,
        "end": 278,
        "decorators": [],
        "name": "Derived",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "start": 287,
        "end": 299,
        "decorators": [],
        "name": "Intermediate",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 300,
        "end": 347,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 306,
            "end": 320,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 306,
              "end": 314,
              "decorators": [],
              "name": "property",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "start": 317,
              "end": 319,
              "value": 42,
              "raw": "42"
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
            "type": "PropertyDefinition",
            "start": 325,
            "end": 345,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 325,
              "end": 339,
              "decorators": [],
              "name": "staticProperty",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "start": 342,
              "end": 344,
              "value": 42,
              "raw": "42"
            },
            "computed": false,
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
    },
    {
      "type": "ClassDeclaration",
      "start": 349,
      "end": 451,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 355,
        "end": 368,
        "decorators": [],
        "name": "StaticDerived",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "start": 377,
        "end": 389,
        "decorators": [],
        "name": "Intermediate",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 390,
        "end": 451,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 396,
            "end": 417,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 403,
              "end": 411,
              "decorators": [],
              "name": "property",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "start": 414,
              "end": 416,
              "value": 42,
              "raw": "42"
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
            "start": 422,
            "end": 449,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 429,
              "end": 443,
              "decorators": [],
              "name": "staticProperty",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "start": 446,
              "end": 448,
              "value": 42,
              "raw": "42"
            },
            "computed": false,
            "static": true,
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
  ],
  "sourceType": "script",
  "hashbang": null
}
```
